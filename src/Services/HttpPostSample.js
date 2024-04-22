import axios from "axios";
import { useState } from "react";

function HttpPost() {
    const [postData, setPostData] = useState({
        epc: "string",
        tankID: "st",
        rowID: "st",
        columnID: "st"
    });

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://35.131.11.146/TKSE.CoralID.API/InventoryParameters/Mapping",
                postData
            );
            console.log("Post request successful:", response.data);
            alert("post succesfull ")
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    return (
        <div>
            <button onClick={handleSubmit}>Send POST Request</button>
        </div>
    );
}

export default HttpPost;
