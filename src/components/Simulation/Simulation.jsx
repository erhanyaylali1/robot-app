import React, { useState } from "react";
import './Simulation.css';
import Grid from "../Grid/Grid";
import Buttons from "../Buttons/Buttons";

const Simulation = () => {

    const [robotPosition, setRobotPosition] = useState({
        x: 0, y: 0
    })

    return (
        <div className="simulation__container">
            <Buttons robotPosition={robotPosition} setRobotPosition={setRobotPosition}  />            
            <Grid robotPosition={robotPosition} />
        </div>
    );

}

export default Simulation;