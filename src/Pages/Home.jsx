import React from "react";
import ArtefactGrid from "../Components/ArtefactGrid";
import { useArtefactContext } from "../Components/ArtefactContext";
import ArtefactInfo from "../Components/ArtefactInfo";
import loading from '../Assets/loading.gif';
import ManagingArtefact from "../Hooks/ManagingArtefact";
import Notifications from "../Components/Notifications.jsx";

const Home = () => {
    const { isLoading } = ManagingArtefact();
    const { selectedArtefact } = useArtefactContext();

    return (
        <div className="flex flex-row w-screen py-5 px-3 space-x-2">
            <div className="flex flex-col justify-center items-center space-y-4">
            {isLoading ? (
                // Display loading image when artefacts are being loaded
                <img src={loading} alt="Loading" />
            ) : selectedArtefact ? (
                // Display artefact info when an artefact is selected
                <ArtefactInfo artefact={selectedArtefact} />
            ) : (
                // Display artefact grid when no artefact is selected
                <ArtefactGrid />
            )}
            </div>
            <div className="flex  space-y-4 w-[1/4]">
                <Notifications />
            </div>
            
        </div>
    );
};

export default Home;
