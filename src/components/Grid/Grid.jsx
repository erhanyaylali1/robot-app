import React, { useMemo } from "react";
import './Grid.css';

const Grid = ({ robotPosition }) => {
    const gridMap = useMemo(() => {
        const map = [];
        for (let y = 0; y < 6; y++) {
            for (let x = 0; x < 6; x++) {
                const isRobotHere = robotPosition.x === x && robotPosition.y === y;
                map.push(
                    <div key={`x:${x}-y:${y}`} className={`grid__container__item ${isRobotHere ? "active":""}`}>
                        {isRobotHere ? "Robot" : ""}
                    </div>
                );
            }
        }
        return map;
    }, [robotPosition]);


    return (
        <div className="grid__container">
            {gridMap}
        </div>
    );

}

export default Grid;