import React from "react";
import SetMappingNew from "../Components/SetMappingNew";
import GetMappingNew from "../Components/GetMappingNew";
import './TankMapping.css'; 

const TankMapping = () => {
	return (
		<div className="TankMappingstyle">
			<SetMappingNew />
			<GetMappingNew />
		</div>
	);
};

export default TankMapping;
