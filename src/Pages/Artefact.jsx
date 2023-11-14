import React, { useState } from "react";
import ManagingArtefact from "../Hooks/ManagingArtefact";
import '../Styles/ManageArtefact.css';

const Artefact = () => {
    const {
        handleInput,
        handleArtefact,
        errorMessage,
        artefact,
        artefactData,
        isLoading,
        fetchArtefactData,
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
        <h2>Artefact Management</h2>
        <button className="add-button" onClick={openPopup}>Add Artefact</button>

        {isPopupOpen && (
            <div className="popup">
                <div className="popup-content">
                    <span className="close" onClick={closePopup}>&times;</span>
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
            </div>
        )}

        <h2>Artefact List</h2>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <ul>
                {artefactData.map((artefact) => (
                    <li key={artefact.id}>
                        {/* Display the artefact name */}
                        <span>{artefact.name}</span>

                        {/* Add a button to delete the artefact */}
                        <button onClick={() => handleDeleteArtefact(artefact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
    )
};

export default Artefact;