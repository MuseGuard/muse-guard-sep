import React from "react";
import ArtefactGrid from "../Components/ArtefactGrid";
import { useArtefactContext } from "../Components/ArtefactContext";
import ArtefactInfo from "../Components/ArtefactInfo";

const Home = () => {

    const { selectedArtefact } = useArtefactContext();

    return (
        <div className="flex flex-row  w-screen py-5 px-3 space-x-2 ">

            {selectedArtefact ? (
                <ArtefactInfo artefact={selectedArtefact} />
            ) : (
                <ArtefactGrid />
            )}
            <div className="flex flex-col bg-black/40 w-1/4 ">

            </div>
        </div>
    );
};

export default Home;
