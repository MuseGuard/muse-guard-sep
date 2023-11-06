import React from "react";
import SensorData from "./SensorData"; 

const apiUrl = " "; // Replace with your actual API URL

function App() {
  return (
    <div className="App">
      <SensorData url={apiUrl} /> {/* Pass the API URL as a prop */}
    </div>
  );
}

export default App;
