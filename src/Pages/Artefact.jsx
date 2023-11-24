// Artefact.js
import React, { useState } from "react";
import ManagingArtefact from "../Hooks/ManagingArtefact";
import add from '../Assets/add.gif';
import { Button, TextField, Modal, Typography , ToggleButton , ToggleButtonGroup} from "@mui/material";
import '../Styles/ManageArtefact.css';
import ToggleSensorState from "../Hooks/toggleSensorState";

const Artefact = () => {
  const {
    handleInput,
    handleArtefact,
    errorMessage,
    artefact,
    artefactData,
    isLoading,
    handleDeleteArtefact,
  } = ManagingArtefact();

  const {
    toggleState,
    handleToggleSensors
  } = ToggleSensorState();

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="manage-artefact-container">
      <Typography variant="h2">Artefact Management</Typography>
      <Button variant="contained" onClick={openPopup}>
        <img className="add-artefact-logo" src={add} alt="logo" />
      </Button>
      <Modal open={isPopupOpen} onClose={closePopup}>
        <div className="popup">
          <div className="popup-content">
            <Button className="close" onClick={closePopup}>
              &times;
            </Button>
            <Typography variant="h2">Add Artefact</Typography>
            <div className="input-container">
              <label>Name:</label>
              <TextField
                type="text"
                name="name"
                value={artefact.name}
                onChange={handleInput}
              />
            </div>
            <div className="input-container">
              <label>Description:</label>
              <TextField
                type="text"
                name="description"
                value={artefact.description}
                onChange={handleInput}
              />
            </div>
            <div className="input-container">
              <label>Image URL:</label>
              <TextField
                type="text"
                name="imageUrl"
                value={artefact.imageUrl}
                onChange={handleInput}
              />
            </div>
            <div className="input-container">
              <label>Minimum Temperature:</label>
              <TextField
                type="text"
                name="minTemperature"
                value={artefact.minTemperature}
                onChange={handleInput}
              />
            </div>
            <div className="input-container">
              <label>Maximum Temperature:</label>
              <TextField
                type="text"
                name="maxTemperature"
                value={artefact.maxTemperature}
                onChange={handleInput}
              />
            </div>
            <div className="input-container">
              <label>Minimum Humidity:</label>
              <TextField
                type="text"
                name="minHumidity"
                value={artefact.minHumidity}
                onChange={handleInput}
              />
            </div>
            <div className="input-container">
              <label>Maximum Humidity:</label>
              <TextField
                type="text"
                name="maxHumidity"
                value={artefact.maxHumidity}
                onChange={handleInput}
              />
            </div>
            <div className="input-container">
              <label>Minimum Light Level:</label>
              <TextField
                type="text"
                name="minLightLevel"
                value={artefact.minLight}
                onChange={handleInput}
              />
            </div>
            <div className="input-container">
              <label>Maximum Light Level:</label>
              <TextField
                type="text"
                name="maxLightLevel"
                value={artefact.maxLight}
                onChange={handleInput}
              />
            </div>  
            <Button className="add-button" onClick={handleArtefact} variant="contained">
              Add
            </Button>
            {errorMessage && (
              <Typography className="error-message">Error: {errorMessage}</Typography>
            )}
          </div>
        </div>
      </Modal>

      <ToggleButtonGroup
        value={toggleState}
        exclusive
        onChange={handleToggleSensors}
        aria-label="Toggle Sensors"
      >
        <ToggleButton value={true} aria-label="Turn On Sensors">
          Turn On Sensors
        </ToggleButton>
        <ToggleButton value={false} aria-label="Turn Off Sensors">
          Turn Off Sensors
        </ToggleButton>
      </ToggleButtonGroup>

      <Typography variant="h2">Artefact List</Typography>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {artefactData.map((artefact) => (
            <li key={artefact.name}>
              {/* Display the artefact name */}
              <span>{artefact.name}</span>

              {/* Add a button to delete the artefact */}
              <Button onClick={() => handleDeleteArtefact(artefact.name)} variant="contained">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Artefact;
