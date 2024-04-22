import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MappingSystem = () => {
  const [mappingData, setMappingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/GetMappingSlot');
        setMappingData(response.data);
      } catch (error) {
        console.error('Error fetching mapping data:', error);
      }
    };

    fetchData();
  }, []);

  const renderSlot = (slotID, epc) => {
    const slotStyle = {
        padding: '10px',
        width: '70px', // Adjust the width according to your preference
        height: '70px', // Adjust the height according to your preference
        
      };

    if (epc) {
    return <div style={{ ...slotStyle, backgroundColor: 'green' }}>{slotID}</div>;
  } else {
    return <div style={slotStyle}>{slotID}</div>;
  }
  };

  return (
    <div>
      <h1>Coral Mapping</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 0fr)', gap: '5px' }}>
        {[...Array(25)].map((_, index) => {
          const slotID = index + 1;
          const slotData = mappingData.find(data => parseInt(data.slotID.trim()) === slotID);
          const epc = slotData ? slotData.epc : '';
          return renderSlot(slotID, epc);
        })}
      </div>
    </div>
  );
};

export default MappingSystem;
