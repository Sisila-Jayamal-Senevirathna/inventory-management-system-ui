import React, { useEffect, useState } from "react";
import axios from "axios";

const GetMapping = () => {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    axios
      .get("http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/GetMapping")
      .then((response) => {
        setMapData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mapping data:", error);
      });
  }, []);

  // Function to get the background color based on availability
  const getBackgroundColor = (availability) => {
    return availability === "1" ? "green" : "white";
  };

  // Render a single cell in the matrix
  const renderCell = (item) => {
    return (
      <div
        key={item.epc}
        style={{
          backgroundColor: getBackgroundColor(item.availability),
          border: "1px solid black",
          width: "80px",
          height: "80px",
          textAlign: "center",
          fontSize: "6px",
          lineHeight: "80px",
        }}
      >
        {item.epc}
      </div>
    );
  };

  // Organize the map data into rows and columns
  const organizeIntoMatrix = (data) => {
    const matrix = {};

    data.forEach((item) => {
      const { rowID, columnID } = item;
      if (!matrix[rowID]) {
        matrix[rowID] = {};
      }
      matrix[rowID][columnID] = item;
    });

    return matrix;
  };

  // Render the matrix view
  return (
    <div>
      {Object.keys(organizeIntoMatrix(mapData)).map((rowID) => (
        <div key={rowID} style={{ display: "flex" }}>
          {Object.keys(organizeIntoMatrix(mapData)[rowID]).map((columnID) => (
            <div key={`${rowID}-${columnID}`}>
              {renderCell(organizeIntoMatrix(mapData)[rowID][columnID])}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GetMapping;
