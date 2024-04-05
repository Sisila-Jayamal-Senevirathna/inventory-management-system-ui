import React, { useEffect, useState } from "react";
import axios from "axios";

const InventoryParameter=()=>{

  const [availableItems, setAvailableItems] = useState(null);
  

  useEffect(()=>{
    axios.get("http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/Availability")
          .then((response)=>{
            setAvailableItems(response.data.availableItems);
  });
  }, []);

  return(
    <span>{availableItems}</span>
    );
}

export default InventoryParameter;