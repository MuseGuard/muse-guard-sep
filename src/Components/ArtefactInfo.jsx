import React from 'react';
import { useEffect } from "react";
import { useArtefactContext } from "../Components/ArtefactContext";
import previous from '../Assets/previous.png';

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
    <div className=" bg-white/5 shadow-xl rounded-3xl p-8 w-screen flex flex-row ">
           
            <div className="mt-4 w-1/2">
                <div className="flex items-center">
                    <div className="text-2xl font-semibold">
                        <h1>{artefact.name}</h1>
                    </div>
                </div>
                <div className="mt-4 animate-fade-right">
                    <h1 className="text-lg font-bold">GALLERY</h1>
                    <img
                        src={artefact.imageUrl}
                        alt={artefact.name}
                        className="mt-2 rounded-lg shadow w-[500px] h-[500px] animate-fade-right"
                    />
                </div>
            </div>
            <div className="mt-4 px-5 w-1/2 flex justify-center items-center">

                
                <div className="mt-4 justify-center items-center px-5 flex flex-col py-5  h-[500px] w-[500px] animate-fade-left">
                    <h2 className="text-4xl font-bold mb-2 ">Additional Info</h2>
                    <div className='text-2xl font-thin'>
                    <p>Description: <span className='font-bold'> {artefact.description}</span></p>
                    <p>Min Temperature: {artefact.minTemp}</p>
                    <p>Max Temperature: {artefact.maxTemp}</p>
                    <p>Max Light: {artefact.maxLight}</p>
                    <p>Min Humidity: {artefact.minHumidity}</p>
                    <p>Max Humidity: {artefact.maxHumidity}</p>
                    </div>
                    <div className="mt-4 justify-center items-center">
                    <img
                src={previous}
                alt="Next"
                className="cursor-pointer h-[70px] w-[100px]"
                onClick={onReturnToHome}
                
            />
                </div>
                </div>
            </div>

           
        </div>
    );
};

export default ArtefactInfo;
