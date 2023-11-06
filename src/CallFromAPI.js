export const getSensorData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching Sensor Data:", error);
        throw error; 
    }
};
