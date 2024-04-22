import React from "react";
import InventoryTable from '../Components/InventoryTable';
import InventoryParameter from "../Services/InventoryParameter";
 
const CoralList = () => {
    return (
        <div>
    <p className='title'>Inventory Management Dashboard</p>
    <p className='description'>Inventory of Corels</p>
    <div className='subtitle'>     
    <p>Total Amount of Corels - <InventoryParameter/></p>    
    </div>    
    <p className='subtitle'>Corel Details</p>           
    <InventoryTable/>     
</div>
    );
};
 
export default CoralList ;