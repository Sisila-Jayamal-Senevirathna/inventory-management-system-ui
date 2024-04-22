import axios from "axios";
import { useEffect, useState } from "react"
import './InventoryTable.css'

function BookingTable(){
    const[isBooked, setIsBooked]= useState([]);

    useEffect(()=>{
        
        axios.get('http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/GetAll')
        
        .then((response)=>{
            setIsBooked(response.data);
        });
    }, []);

    const renderTableData=()=>{
        return isBooked?.map((val)=>(
            <tr class>
                <td>{val.epc}</td>
                <td>{val.availability}</td>
                <td>{val.dateModified}</td>                
            </tr>
        ));
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Availability</th>
                        <th>DateModified</th>
                    </tr>
                </thead>
                <tbody>{renderTableData()}</tbody>
            </table>
            <div>
                {/* <h1>Assign To Slots</h1> */}
            
            </div>
        </div>
        

    );
}

export default BookingTable;