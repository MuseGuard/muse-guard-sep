import React, { useState, useEffect, useRef } from 'react';
import PinCode from '../Hooks/PinCode';

const PinCodePage = () => {
  const [enteredPin, setEnteredPin] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const { loading, error, result, comparePin } = PinCode();

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (inputRefs[focusedIndex] && inputRefs[focusedIndex].current) {
      inputRefs[focusedIndex].current.focus();
    }
  }, [focusedIndex]);

  const handleComparePin = () => {
    const pin = enteredPin.join('');
    if (pin.length === 4) {
      comparePin(pin);
    } else {
      alert('Please enter a 4-digit pin code.');
    }
  };

  const handleChange = (index, value) => {
    const newPin = [...enteredPin];
    newPin[index] = value.replace(/[^0-9]/g, '').charAt(0); // Allow only numeric input
    setEnteredPin(newPin);

    // Move focus to the next input box
    if (value !== '' && index < 3) {
      setFocusedIndex(index + 1);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
        handleComparePin();
      }
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="pin-input-container space-x-4">
        {enteredPin.map((digit, index) => (
          <input
            key={index}
            type="password" // Use password type for PIN entry
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength="1"
            className="w-10 h-10 text-2xl text-center border rounded focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
            ref={inputRefs[index]}
          />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4">
      <button
        onClick={handleComparePin}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
      >
        Toggle Device
      </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p style={{ color: 'green' }}>{result.message}</p>}
    </div>
  );
};

export default PinCodePage;
