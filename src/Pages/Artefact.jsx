import React from 'react';
import ManagingArtefact from '../Hooks/ManagingArtefact';
import bin from '../Assets/bin.png';
import '../Styles/Artefact.css';
import ChangePin from '../Components/ChangePin';
import PinCodePage from '../Components/PinCodePage';
import ChangePassword from '../Components/ChangePassword';

const Artefact = () => {
    const {
        handleInput,
        handleArtefact,
        artefact,
        artefactData,
        isLoading,
        handleDeleteArtefact,
    } = ManagingArtefact();

    return (
        <div className="flex flex-col desktop:flex-row w-screen h-[700px] desktop:mt-4 desktop:space-y-2 desktop:space-x-2">
            <div className="bg-white/5 shadow-xl rounded-3xl w-full desktop:w-1/3 p-4 animate-fade-right">
                <h2 className="text-3xl text-center">Add Artefact</h2>
                <div className="space-y-8">
                    {/* ... Input fields and add button */}
                    <div className="input-container space-x-1 flex justify-between">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={artefact.name}
                            onChange={handleInput}
                            className='opacity-50 rounded-3xl px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 '
                        />
                    </div>
                    <div className="input-container space-x-1 flex justify-between">
                        <label>Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={artefact.description}
                            onChange={handleInput}
                            className='opacity-50 rounded-3xl px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 '
                        />
                    </div>
                    <div className="input-container space-x-1 flex justify-between">
                        <label>Image URL:</label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={artefact.imageUrl}
                            onChange={handleInput}
                            className='opacity-50 rounded-3xl px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 '
                        />
                    </div>
                    <div className="input-container space-x-1 flex justify-between">
                        <label>Minimum Temperature:</label>
                        <input
                            type="number"
                            name="minTemperature"
                            value={artefact.minTemperature}
                            onChange={handleInput}
                            className='opacity-50 rounded-3xl px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 '
                        />
                    </div>
                    <div className="input-container space-x-1 flex justify-between">
                        <label>Maximum Temperature:</label>
                        <input
                            type="number"
                            name="maxTemperature"
                            value={artefact.maxTemperature}
                            onChange={handleInput}
                            className='opacity-50 rounded-3xl px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 '
                        />
                    </div>
                    <div className="input-container space-x-1 flex justify-between">
                        <label>Minimum Humidity:</label>
                        <input
                            type="number"
                            name="minHumidity"
                            value={artefact.minHumidity}
                            onChange={handleInput}
                            className='opacity-50 rounded-3xl px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 '
                        />
                    </div>
                    <div className="input-container space-x-1 flex justify-between">
                        <label>Maximum Humidity:</label>
                        <input
                            type="number"
                            name="maxHumidity"
                            value={artefact.maxHumidity}
                            onChange={handleInput}
                            className='opacity-50 rounded-3xl px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 '
                        />
                    </div>
                    <div className="flex space-x-1 justify-between ">
                        <label>Maximum Light Level:</label>
                        <input
                            type="number"
                            name="maxLight"
                            value={artefact.maxLight}
                            onChange={handleInput}
                            className='opacity-50 rounded-3xl px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 '
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-max" onClick={handleArtefact} >Add</button>
                    </div>
                </div>
            </div>

            <div className="bg-white/5 shadow-xl rounded-3xl w-full desktop:w-1/3 p-4 animate-fade-down overflow-auto">
                <h2 className="text-3xl text-center">ARTEFACT LIST</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ol>
                        {artefactData.map((artefact) => (
                            <li key={artefact.name}>
                                {/* ... Display the artefact name and delete button */}
                                <div className='flex flex-col px-2'>
                                    <div className="flex flex-row justify-between space-y-2 px-2 pb-2">
                                        <span className='pt-2 text-md'>{artefact.name}</span>

                                        {/* Add a button to delete the artefact */}
                                        <img src={bin} alt="bin" className="h-auto w-[20px] cursor-pointer hover:animate-pulse hover:animate-infinite hover:animate-duration-1000" onClick={() => handleDeleteArtefact(artefact.name)} />
                                    </div>
                                    <hr className='opacity-50' />
                                </div>
                            </li>
                        ))}
                    </ol>
                )}
            </div>

            <div className="flex flex-col w-full desktop:w-1/3 space-y-2 bg-white/5 shadow-xl rounded-3xl p-4">
                <div className="h-1/3 bg-white/10 animate-fade-down">
                    <h2 className="text-3xl text-center">Change Password</h2>
                    <ChangePassword />
                </div>
                <div className="h-1/3 bg-white/5 animate-fade-left">
                    <h2 className="text-3xl text-center">Enter Pin</h2>
                    <PinCodePage />
                </div>
                <div className="h-1/3 bg-white/5 animate-fade-up">
                    <h2 className="text-3xl text-center">Change Pin</h2>
                    <ChangePin />
                </div>
            </div>
        </div>
    );
};

export default Artefact;
