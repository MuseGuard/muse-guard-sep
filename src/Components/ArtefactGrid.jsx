// Grid.jsx
import React from 'react';
import ArtefactCard from './ArtefactCard';
import ManagingArtefact from '../Hooks/ManagingArtefact';

const ArtefactGrid = () => {
    const { artefactData, isLoading, fetchArtefactData } = ManagingArtefact();

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                    <p className="text-center">Loading...</p>
                ) : (
                    artefactData.map((artefact) => (
                        <ArtefactCard key={artefact.name} artefact={artefact} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ArtefactGrid;
