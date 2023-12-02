import { useState } from 'react';
import axios from 'axios';

const PinCode = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const comparePin = async (pinCode) => {
    try {
      setLoading(true);

      console.log(pinCode);
      const response = await axios.post('http://localhost:3000/pins/comparePin', { pinCode });


      setResult(response.data);
    } catch (error) {
        console.log(error);
      setError(error.response ? error.response.data.error : 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, result, comparePin };
};

export default PinCode;
