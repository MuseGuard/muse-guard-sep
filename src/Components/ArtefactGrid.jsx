import React from 'react';
import ArtefactCard from './ArtefactCard';
import ManagingArtefact from '../Hooks/ManagingArtefact';
import loading from '../Assets/loading.gif';
import next from '../Assets/next.png';
import previous from '../Assets/previous.png';

const ArtefactGrid = () => {
    const { artefactData, isLoading,  currentPage, handleNextPage, handlePreviousPage } = ManagingArtefact();

    const startIndex = (currentPage - 1) * 8; // Adjust the items per page as needed
    const endIndex = startIndex + 8;
    const currentArtefacts = artefactData.slice(startIndex, endIndex);

    return (
        <div className="max-w-6xl mx-auto p-8 bg-black/20 flex flex-row">
            <div className="flex justify-between items-center px-3">
            <img
                src={previous}
                alt="Previous"
                className="cursor-pointer h-[50px] w-[150px]"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
            />
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 `}>
                {isLoading ? (
                    <img src={loading} alt="loading" />
                ) : (
                    currentArtefacts.map((artefact) => (
                        <ArtefactCard key={artefact.name} artefact={artefact} />
                    ))
                )}
            </div>
            <div className="flex justify-between items-center px-3">
                
            <img
                src={next}
                alt="Next"
                className="cursor-pointer h-[50px] w-[150px]"
                onClick={handleNextPage}
                disabled={endIndex >= artefactData.length}
            />
            </div>
        </div>
    );
};

export default ArtefactGrid;
