import { useState } from "react";
import axios from "axios";

const ToggleSensorState = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggleSensors = async () => {
    try {
      setToggleState(!toggleState);
      await axios.patch("URL", {toggleState});
    } catch (error) {
      console.error('Error toggling sensors:', error);
    }
  };

  return {
    toggleState,
    handleToggleSensors,
  }
    
};

export default ToggleSensorState;
