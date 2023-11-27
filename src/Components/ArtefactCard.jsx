import React from "react";

const ArtefactCard = ({ artefact }) => {
    return(
        <div className="max-w-xs mx-auto my-4 px-4 py-6 ">
            <div className="bg-white rounded-lg overflow-hidden shadow-md px-3 py-2 ">
                <img className="w-full h-56 object-cover object-center" src={artefact.imageUrl} alt="avatar" />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{artefact.name}</div>
                <p className="text-gray-700 text-base">{artefact.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ArtefactCard;