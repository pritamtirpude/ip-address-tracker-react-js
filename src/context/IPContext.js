import { createContext, useState } from "react";
import axios from "axios";

const IPContext = createContext();
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=" + API_KEY;

export const IPProvider = ({ children }) => {
  const [trackerData, setTrackerData] = useState({});

  const fetchData = async (ipAddress) => {
    const response = await axios.get(`${API_URL}&domain=${ipAddress}`);

    setTrackerData(response.data);
  };

  return (
    <IPContext.Provider value={{ fetchData, trackerData }}>
      {children}
    </IPContext.Provider>
  );
};

export default IPContext;
