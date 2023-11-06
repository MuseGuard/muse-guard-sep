export const getSensorData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data; // Return the data received from the API
    } catch (error) {
        console.error("Error fetching Sensor Data:", error);
        throw error; 
    }
};
