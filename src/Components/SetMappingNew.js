import React, { useState } from 'react';
import axios from "axios";

const SetMapping = () => {
  const [setLatestEpc] = useState(null);
  //const [epc, setLatestEpc] = useState(null);

  const fetchLatestEpc = async () => {
    try {
      const response = await axios.get("http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/latestepc");
      return response.data[0]?.epc;
    } catch (error) {
      console.error("Error fetching latest EPC:", error);
      return null;
    }
  };

  const handleSubmit = async (slotID) => {
    try {
      
      const latestEpcValue = await fetchLatestEpc();
      
      const response = await axios.post(
        "http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/SaveMappingSlot",
        {
          epc: latestEpcValue || "",
          slotID: slotID          
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
    fontSize: '14px',
    padding: '10px 10px',
    margin: '5px',
    width: '85px', // Set the width of the button
    height: '85px', // Set the height of the button
    outline: 'none',
  };

  return (
    <div>
      <div>
      <h1>Assign To Slots</h1>
      </div>
      <div>  
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("1")}>Slot 01</button>
      <button style={buttonStyle} onClick={() => handleSubmit("2")}>Slot 02</button>
      <button style={buttonStyle} onClick={() => handleSubmit("3")}>Slot 03</button>
      <button style={buttonStyle} onClick={() => handleSubmit("4")}>Slot 04</button>
      <button style={buttonStyle} onClick={() => handleSubmit("5")}>Slot 05</button>
      </div>    
      
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("6")}>Slot 06</button>
      <button style={buttonStyle} onClick={() => handleSubmit("7")}>Slot 07</button>
      <button style={buttonStyle} onClick={() => handleSubmit("8")}>Slot 08</button>
      <button style={buttonStyle} onClick={() => handleSubmit("9")}>Slot 09</button>
      <button style={buttonStyle} onClick={() => handleSubmit("10")}>Slot 10</button>
      </div>
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("11")}>Slot 11</button>
      <button style={buttonStyle} onClick={() => handleSubmit("12")}>Slot 12</button>
      <button style={buttonStyle} onClick={() => handleSubmit("13")}>Slot 13</button>
      <button style={buttonStyle} onClick={() => handleSubmit("14")}>Slot 14</button>
      <button style={buttonStyle} onClick={() => handleSubmit("15")}>Slot 15</button>
      </div>    
      
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("16")}>Slot 16</button>
      <button style={buttonStyle} onClick={() => handleSubmit("17")}>Slot 17</button>
      <button style={buttonStyle} onClick={() => handleSubmit("18")}>Slot 18</button>
      <button style={buttonStyle} onClick={() => handleSubmit("19")}>Slot 19</button>
      <button style={buttonStyle} onClick={() => handleSubmit("20")}>Slot 20</button>
      </div>
      <div>
      <button style={buttonStyle} onClick={() => handleSubmit("21")}>Slot 21</button>
      <button style={buttonStyle} onClick={() => handleSubmit("22")}>Slot 22</button>
      <button style={buttonStyle} onClick={() => handleSubmit("23")}>Slot 23</button>
      <button style={buttonStyle} onClick={() => handleSubmit("24")}>Slot 24</button>
      <button style={buttonStyle} onClick={() => handleSubmit("25")}>Slot 25</button>
      </div>
    </div>

    </div>
    

    
  );
};

export default SetMapping;
