import React from 'react';
import ArtefactCard from './ArtefactCard';
import ManagingArtefact from '../Hooks/ManagingArtefact';
import loading from '../Assets/loading.gif';
import next from '../Assets/next.png';
import previous from '../Assets/previous.png';

const ArtefactGrid = () => {
    const { artefactData, isLoading, currentPage, handleNextPage, handlePreviousPage } = ManagingArtefact();

    const startIndex = (currentPage - 1) * 8; // Adjust the items per page as needed
    const endIndex = startIndex + 8;
    const currentArtefacts = artefactData.slice(startIndex, endIndex);

    return (
        <div className="max-w-6xl mx-auto py-4 bg-black/20 flex flex-row rounded-xl animate-fade-down">
            {currentPage > 1 && (
                <div className="flex justify-between items-center px-3">
                    <img
                        src={previous}
                        alt="Previous"
                        className="cursor-pointer h-[50px] w-[150px]"
                        onClick={handlePreviousPage}
                    />
                </div>
            )}
            <div className={`grid tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-4 gap-5 `}>
                {isLoading ? (
                    <img src={loading} alt="loading" />
                ) : (
                    currentArtefacts.map((artefact) => (
                        <ArtefactCard key={artefact.name} artefact={artefact} />
                    ))
                )}
            </div>
            {endIndex < artefactData.length && (
                <div className="flex justify-between items-center px-3">
                    <img
                        src={next}
                        alt="Next"
                        className="cursor-pointer h-[50px] w-[150px]"
                        onClick={handleNextPage}
                    />
                </div>
            )}
        </div>
    );
};

export default ArtefactGrid;
