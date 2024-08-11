import React from "react";
import './Buttons.css';

const Button = ({ robotPosition, setRobotPosition }) => {

    console.log(robotPosition);

    const move = (direction) => {
        switch (direction) {
            case "up": 
                if (robotPosition.y !== 0) {
                    setRobotPosition({ x: robotPosition.x, y: robotPosition.y - 1});
                } else {
                    alert("Robot can't go up!")
                }
                break;
            case "left":
                if (robotPosition.x !== 0) {
                    console.log("left");
                    setRobotPosition({ x: robotPosition.x - 1, y: robotPosition.y});
                } else {
                    alert("Robot can't go left!")
                }
                break;
            case "down":
                if (robotPosition.y !== 5) {
                    setRobotPosition({ x: robotPosition.x, y: robotPosition.y + 1});
                } else {
                    alert("Robot can't go down!")
                }
                break;
            case "right":
                if (robotPosition.x !== 5) {
                    setRobotPosition({ x: robotPosition.x + 1, y: robotPosition.y});
                } else {
                    alert("Robot can't go right!")
                }
                break;
            default:
                console.log("No Movement");
                break;
        }
    }

    return (
        <div className="buttons__container">
            <div className="buttons__wrapper">
                <button disabled={robotPosition.y === 0} className="button__container__item button__container__up" onClick={() => move("up")}>
                    Go Up
                </button>
                <button disabled={robotPosition.x === 0} className="button__container__item button__container__left" onClick={() => move("left")}>
                    Go Left
                </button>
                <button disabled={robotPosition.y === 5} className="button__container__item button__container__down" onClick={() => move("down")}>
                    Go Down
                </button>
                <button disabled={robotPosition.x === 5} className="button__container__item button__container__right" onClick={() => move("right")}>
                    Go Right
                </button>
            </div>
        </div>
    );

}

export default Button;