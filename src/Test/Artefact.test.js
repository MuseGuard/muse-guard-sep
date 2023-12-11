import axios from "axios";
import ManagingArtefact from "../Hooks/ManagingArtefact";

jest.mock("axios");

describe("ManagingArtefact hooks", () => {
  let managingArtefact;

  beforeEach(() => {
    managingArtefact = new ManagingArtefact();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("initializes with default state", () => {
    const initialState = managingArtefact.getInitialState();

    expect(initialState).toEqual({
      artefact: {
        name: "",
        description: "",
        imageUrl: "",
        minTemp: 0,
        maxTemp: 0,
        maxLight: 0,
        minHumidity: 0,
        maxHumidity: 0,
      },
      errorMessage: null,
      artefactData: [],
      isLoading: false,
      currentPage: 1,
      itemsPerPage: 8,
    });
  });

  it("fetches artefact data on component mount", async () => {
    const mockedData = [
      {
        name: "Artefact1",
        description: "Sample description",
        imageUrl: "http://example.com/image1.jpg",
        minTemp: 20,
        maxTemp: 30,
        maxLight: 500,
        minHumidity: 40,
        maxHumidity: 60,
      },
      {
        name: "Artefact2",
        description: "Another description",
        imageUrl: "http://example.com/image2.jpg",
        minTemp: 15,
        maxTemp: 25,
        maxLight: 400,
        minHumidity: 35,
        maxHumidity: 55,
      },
    ];

    axios.get.mockResolvedValue({ data: mockedData });

    await managingArtefact.fetchArtefactData();

    expect(axios.get).toHaveBeenCalledWith(managingArtefact.url, {
      params: {
        startIndex: 0,
        pageSize: managingArtefact.itemsPerPage,
      },
    });

    expect(managingArtefact.artefactData).toEqual(mockedData);
    expect(managingArtefact.isLoading).toBe(false);
  });

  it("updates artefact state on input change", () => {
    const inputEvent = { target: { name: "name", value: "New Artefact" } };
    managingArtefact.handleInput(inputEvent);

    expect(managingArtefact.artefact.name).toBe("New Artefact");
  });

  it("creates artefact on API call", async () => {
    const mockedResponse = { data: { message: "Artefact created successfully" } };

    axios.post.mockResolvedValue(mockedResponse);

    await managingArtefact.handleArtefact();

    expect(axios.post).toHaveBeenCalledWith(
      "http://34.88.237.151/artifacts/postArtifact",
      managingArtefact.artefact
    );

    expect(managingArtefact.errorMessage).toBeNull();
    
  });

  
});
