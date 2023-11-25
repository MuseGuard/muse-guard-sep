import { useState } from "react";
import axios from "axios";

const ToggleSensorState = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggleSensors = async () => {
    try {
      setToggleState(!toggleState);
      await axios.patch("http://localhost:3000/motion/updateMotion", {toggleState});
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
