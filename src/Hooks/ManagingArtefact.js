//import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ManagingArtefact = () => {
  const [artefact, setArtefact] = useState({
    name: "",
    description: "",
    imageUrl: "",
    minTemp: 0,      // Make sure these are not empty or undefined
    maxTemp: 0,
    maxLight: 0,     // Make sure these are not empty or undefined
    minHumidity: 0,
    maxHumidity: 0,
  });
  
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setArtefact({ ...artefact, [name]: value });
  };
  
  const handleArtefact = () => {
    axios
      .post("http://localhost:3000/artifacts/postArtifact", artefact)
      .then((response) => {
        console.log("Artefact Created Successfully", response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("Error Adding Artefact", error);
      });
  };

  const [artefactData, setArtefactData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:3000/artifacts/getAllArtifacts"; // Replace with your API endpoint URL

  const fetchArtefactData = () => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setArtefactData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching artefact data:", error);
      });
  };

  useEffect(() => {
    fetchArtefactData();
  }, []); // Fetch data when the component is mounted

  const handleDeleteArtefact = (name) => {
    axios
      .delete(`http://localhost:3000/artifacts/deleteart/${name}`)
      .then((response) => {
        console.log(response.data);
        console.log("Artefact Deleted Successfully");
        setArtefact({
          name: "",
          description: "",
          imageUrl: "",
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("Error Deleting Artefact", error);
      });
  };
  
  return {
    handleInput,
    handleArtefact,
    errorMessage,
    artefact,
    artefactData,
    isLoading,
    fetchArtefactData,
    handleDeleteArtefact,
  };
};

export default ManagingArtefact;
