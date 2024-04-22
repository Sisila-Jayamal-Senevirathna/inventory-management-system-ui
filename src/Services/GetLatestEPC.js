import React, { useEffect, useState } from "react";
import axios from "axios";

const GetLatestEPC = ({ onLatestEpcChange }) => {

  const [latestEpc, setLatestEpc] = useState(null);

  useEffect(() => {
    axios.get("http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/latestepc")
      .then((response) => {
        const latestEpc = response.data[0]?.epc;
        setLatestEpc(latestEpc);        
        onLatestEpcChange(latestEpc);
      })
      .catch((error) => {
        console.error("Error fetching latest EPC:", error);
      });
  }, []);

  return (
    <div>
      <p>Latest EPC: {latestEpc}</p>      
    </div>
  );
};

export default GetLatestEPC;


