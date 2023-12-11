import axios from 'axios';
import useHumidityData from '../Hooks/useHumidityData';

jest.mock('axios');

describe('useHumidityData hook', () => {
  let humidityData;

  beforeEach(() => {
    humidityData = new useHumidityData();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('initializes with default state', () => {
    const initialState = humidityData.getInitialState();

    expect(initialState).toEqual({
      humiditySensorData: null,
      isLoading: false,
      humidityChart: {
        labels: [],
        datasets: [
          {
            label: 'Sensor Data',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      LineChart: expect.any(Object),
    });
  });

  it('fetches humidity sensor data on component mount', async () => {
    const mockedData = [
      { time: '2023-01-01T12:00:00Z', measurement: 40 },
      { time: '2023-01-01T12:05:00Z', measurement: 45 },
    ];

    axios.get.mockResolvedValue({ data: mockedData });

    await humidityData.humidityData();

    expect(axios.get).toHaveBeenCalledWith(humidityData.url);

    expect(humidityData.humiditySensorData).toEqual(mockedData);
    expect(humidityData.isLoading).toBe(false);
  });

  it('fetches last N values of humidity sensor data', async () => {
    const mockedData = [
      { time: '2023-01-01T12:00:00Z', measurement: 40 },
      { time: '2023-01-01T12:05:00Z', measurement: 45 },
    ];

    axios.get.mockResolvedValue({ data: mockedData });

    await humidityData.fetchHumidityLastNValues();

    expect(axios.get).toHaveBeenCalledWith(humidityData.url);

    expect(humidityData.humiditySensorData).toEqual(mockedData);
    expect(humidityData.isLoading).toBe(false);
  });

  it('updates humidity sensor data on component mount', () => {
    const inputEvent = { target: { name: 'name', value: 'New Humidity Data' } };
    humidityData.handleInput(inputEvent);

    expect(humidityData.humiditySensorData.name).toBe('New Humidity Data');
  });
});
