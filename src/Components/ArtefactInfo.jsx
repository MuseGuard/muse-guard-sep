import React from 'react';
import { useEffect } from "react";
import { useArtefactContext } from "../Components/ArtefactContext";

const ArtefactInfo = ({ artefact }) => {
    const { setSelectedArtefact } = useArtefactContext();

    useEffect(() => {
        // Log the artefact when it changes
        console.log('ArtefactInfo - Updated Artefact:', artefact);
      }, [artefact]);

    const onReturnToHome = () => {
      setSelectedArtefact(null);
    };
  
    if (!artefact) {
      // You might want to handle the case when artefact is not provided
      return null;
    }

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-screen">
           
            <div className="mt-4">
                <div className="flex items-center">
                    <div className="text-2xl font-semibold">
                        <h1>{artefact.name}</h1>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-lg font-bold">GALLERY</h1>
                    <img
                        src={artefact.imageUrl}
                        alt={artefact.name}
                        className="mt-2 rounded-lg shadow"
                    />
                </div>
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onReturnToHome} >Home</button>

                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Additional Stats</h2>
                    <p>Description: {artefact.description}</p>
                    <p>Min Temperature: {artefact.minTemp}</p>
                    <p>Max Temperature: {artefact.maxTemp}</p>
                    <p>Max Light: {artefact.maxLight}</p>
                    <p>Min Humidity: {artefact.minHumidity}</p>
                    <p>Max Humidity: {artefact.maxHumidity}</p>
                </div>
            </div>
        </div>
    );
};

export default ArtefactInfo;
