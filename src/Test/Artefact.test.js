import React from 'react';
import { render, fireEvent, waitFor , screen, within} from '@testing-library/react';
import axios from 'axios';
import Artefact from '';

jest.mock('axios');

describe('Artefact component', () => {
  it('should fetch artefact data and update state', async () => {
    const responseData = [{ id: 1, name: 'Artefact 1' }];
    axios.get.mockResolvedValueOnce({ data: responseData });

    const { getByText, getByTestId } = render(<Artefact />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Wait for useEffect to fetch data
    try {
      // Wait for useEffect to fetch data
      await waitFor(() => within(screen.findByText(/Artefact 1/i)).toBeInTheDocument());
    } catch (error) {
      // Handle the error, or rethrow it if needed
      console.error('Error in the waitFor block:', error);
      throw error;
    }
  });

  it('should handle input changes', () => {
    const { getByTestId } = render(<Artefact />);

    fireEvent.change(screen.getByTestId('name-input'), {
      target: { name: 'name', value: 'New Artefact' },
    });

    expect(screen.getByTestId('name-input').value).toBe('New Artefact');
  });

  // Add more tests for other functions such as handleArtefact, handleDeleteArtefact, etc.
});
