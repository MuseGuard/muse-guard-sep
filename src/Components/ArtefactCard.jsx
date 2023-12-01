// import React from "react";

// const ArtefactCard = ({ artefact }) => {
//     return(
    
//             <div className="bg-white/40 rounded-lg overflow-hidden shadow-md px-3 py-1 animate-fade-right ">
//                 <img className="w-full h-56 object-fill object-center" src={artefact.imageUrl} alt="avatar" />
//                 <div className="px-1 py-2">
//                 <div className="font-bold text-xl mb-2">{artefact.name}</div>
//                 <p className="text-gray-700 text-base">{artefact.description}</p>
//                 </div>
//             </div>
        
//     );
// };

// export default ArtefactCard;

import React from "react";
import { useArtefactContext } from "./ArtefactContext";

const ArtefactCard = ({ artefact }) => {
  const { selectedArtefact, setSelectedArtefact } = useArtefactContext();

  const handleClick = () => {
    console.log("Clicked on the card");
    console.log("Selected Artefact before:", selectedArtefact);
  
    setSelectedArtefact((prevArtefact) => {
      console.log("Setting selectedArtefact to:", prevArtefact === artefact ? null : artefact);
      return prevArtefact === artefact ? null : artefact;
    });
  };
  
  console.log("Rendered ArtefactCard with selectedArtefact:", selectedArtefact);
  
  return (
    <div
      className={`bg-white/40 rounded-lg overflow-hidden shadow-md px-3 py-1 pt-3 cursor-pointer animate-fade-down h-[320px] ${
        selectedArtefact === artefact ? "selected" : ""
      }`}
      onClick={handleClick}
    >
      <img
        className="w-full h-56 object-fill object-center rounded-2xl"
        src={artefact.imageUrl}
        alt="avatar"
      />
      <div className="px-1 py-2">
        <div className="font-bold text-xl mb-2">{artefact.name}</div>
        <p className="text-gray-700 text-base">{artefact.description}</p>
      </div>
    </div>
  );
};

export default ArtefactCard;
