import React, { useState } from "react";
import axios from "axios";

const PostArtefact = () => {
  const [artefact, setArtefact] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setArtefact({ ...artefact, [name]: value });
  };

  const handleArtefact = () => {
    axios
      .post(" ", artefact)
      .then((response) => {
        console.log("Artefact Created Successfully", response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("Error Adding Artefact", error);
      });
  };

  return {
    handleInput,
    handleArtefact,
    errorMessage,
    artefact
  }
   
};

export default PostArtefact;
