import { useState } from 'react';
import axios from 'axios';

const PinCode = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [newPinCode, setNewPinCode] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);


  const comparePin = async (pinCode) => {
    try {
      setLoading(true);

      console.log(pinCode);
      const response = await axios.post('http://34.88.184.75:3000/pins/comparePin', { pinCode });


      setResult(response.data);
    } catch (error) {
        console.log(error);
      setError(error.response ? error.response.data.error : 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePin = async () => {
    try {
      setLoading(true);

      // Make a PATCH request to update the PIN code
      const response = await axios.patch('http://34.88.184.75:3000/pins/update-pin', {
        pinCode: newPinCode,
      });

      setSuccessMessage(response.data.message);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.error || 'Internal Server Error');
      setSuccessMessage(null);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, result, comparePin , handleUpdatePin, successMessage, newPinCode, setNewPinCode };
};

export default PinCode;
