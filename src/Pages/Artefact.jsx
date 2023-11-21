// Artefact.js
import React, { useState } from "react";
import ManagingArtefact from "../Hooks/ManagingArtefact";
import add from '../Assets/add.gif';
import { Button, TextField, Modal, Typography } from "@mui/material";
import '../Styles/ManageArtefact.css';

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
            <Button className="add-button" onClick={handleArtefact} variant="contained">
              Add
            </Button>
            {errorMessage && (
              <Typography className="error-message">Error: {errorMessage}</Typography>
            )}
          </div>
        </div>
      </Modal>

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
