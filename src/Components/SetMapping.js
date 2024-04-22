import React, { useState } from 'react';
import axios from "axios";

const SetMapping = () => {
  const [epc, setLatestEpc] = useState(null);

  const fetchLatestEpc = async () => {
    try {
      const response = await axios.get("http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/latestepc");
      return response.data[0]?.epc;
    } catch (error) {
      console.error("Error fetching latest EPC:", error);
      return null;
    }
  };

  const handleSubmit = async (rowID, columnID) => {
    try {
      
      const latestEpcValue = await fetchLatestEpc();
      
      const response = await axios.post(
        "http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/Mapping",
        {
          epc: latestEpcValue || "",
          tankID: "1",
          availability: "1",
          rowID: rowID,
          columnID: columnID
        }
      );
      console.log("Post request successful:", response.data);
      setLatestEpc(null);

    } catch (error) {
      console.error("Error posting data:", error);
    }
  };  

  const buttonStyle = {
    backgroundColor: 'lightblue',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    color: 'black',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '10px 20px',
    margin: '5px',
    outline: 'none',
  };

  return (
    <div>  
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("1", "1")}>Slot 01</button>
      <button style={buttonStyle} onClick={() => handleSubmit("1", "2")}>Slot 02</button>
      <button style={buttonStyle} onClick={() => handleSubmit("1", "3")}>Slot 03</button>
      <button style={buttonStyle} onClick={() => handleSubmit("1", "4")}>Slot 04</button>
      <button style={buttonStyle} onClick={() => handleSubmit("1", "5")}>Slot 05</button>
      </div>    
      
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("2", "1")}>Slot 06</button>
      <button style={buttonStyle} onClick={() => handleSubmit("2", "2")}>Slot 07</button>
      <button style={buttonStyle} onClick={() => handleSubmit("2", "3")}>Slot 08</button>
      <button style={buttonStyle} onClick={() => handleSubmit("2", "4")}>Slot 09</button>
      <button style={buttonStyle} onClick={() => handleSubmit("2", "5")}>Slot 10</button>
      </div>
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("3", "1")}>Slot 11</button>
      <button style={buttonStyle} onClick={() => handleSubmit("3", "2")}>Slot 12</button>
      <button style={buttonStyle} onClick={() => handleSubmit("3", "3")}>Slot 13</button>
      <button style={buttonStyle} onClick={() => handleSubmit("3", "4")}>Slot 14</button>
      <button style={buttonStyle} onClick={() => handleSubmit("3", "5")}>Slot 15</button>
      </div>    
      
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("4", "1")}>Slot 16</button>
      <button style={buttonStyle} onClick={() => handleSubmit("4", "2")}>Slot 17</button>
      <button style={buttonStyle} onClick={() => handleSubmit("4", "3")}>Slot 18</button>
      <button style={buttonStyle} onClick={() => handleSubmit("4", "4")}>Slot 19</button>
      <button style={buttonStyle} onClick={() => handleSubmit("4", "5")}>Slot 20</button>
      </div>
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("5", "1")}>Slot 21</button>
      <button style={buttonStyle} onClick={() => handleSubmit("5", "2")}>Slot 22</button>
      <button style={buttonStyle} onClick={() => handleSubmit("5", "3")}>Slot 23</button>
      <button style={buttonStyle} onClick={() => handleSubmit("5", "4")}>Slot 24</button>
      <button style={buttonStyle} onClick={() => handleSubmit("5", "5")}>Slot 25</button>
      </div>
    </div>

    
  );
};

export default SetMapping;
