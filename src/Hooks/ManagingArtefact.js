import  { useState, useEffect, useCallback } from "react";
import axios from "axios";

const ManagingArtefact = () => {
  const [artefact, setArtefact] = useState({
    name: "",
    description: "",
    imageUrl: "",
    minTemp: 0,
    maxTemp: 0,
    maxLight: 0,
    minHumidity: 0,
    maxHumidity: 0,
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [artefactData, setArtefactData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Change this value based on your preference

  const url = "http://localhost:3000/artifacts/getAllArtifacts";

  const fetchArtefactData = useCallback(() => {
    setIsLoading(true);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
  
    axios
      .get(url, {
        params: {
          startIndex,
          pageSize: itemsPerPage,
        },
      })
      .then((response) => {
        console.log(response.data);
        setArtefactData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching artefact data:", error);
      });
  }, [currentPage, itemsPerPage]);
  
  useEffect(() => {
    fetchArtefactData();
  }, [fetchArtefactData]); // Fetch data when the component mounts and when the page or itemsPerPage changes

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    handleInput: (e) => {
      const { name, value } = e.target;
      setArtefact({ ...artefact, [name]: value });
    },
    handleArtefact: () => {
      axios
        .post("http://localhost:3000/artifacts/postArtifact", artefact)
        .then((response) => {
          console.log("Artefact Created Successfully", response.data);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.error("Error Adding Artefact", error);
        });
    },
    errorMessage,
    artefact,
    artefactData,
    isLoading,
    fetchArtefactData,
    handleDeleteArtefact: (name) => {
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
    },
    currentPage,
    itemsPerPage,
    handleNextPage,
    handlePreviousPage,
    setItemsPerPage
  };
};

export default ManagingArtefact;
