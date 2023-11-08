import React from "react";
import '../Styles/ManageArtefact.css';
import ManagingArtefact from "../Hooks/ManagingArtefact";
const ManageArtefact = () => {
    const { artefact, handleArtefact, handleInput, errorMessage } = ManagingArtefact();
    return (
        <div className="manage-artefact-container">
            <h2>Add Artefact</h2>
            <div className="input-container">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={artefact.name}
                    onChange={handleInput}
                />
            </div>
            <div className="input-container">
                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={artefact.description}
                    onChange={handleInput}
                />
            </div>
            <div className="input-container">
                <label>Image URL:</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={artefact.imageUrl}
                    onChange={handleInput}
                />
            </div>
            <button className="add-button" onClick={handleArtefact}>Add</button>
            {errorMessage && <p className="error-message">Error: {errorMessage}</p>}
        </div>
    )
};

export default ManageArtefact;