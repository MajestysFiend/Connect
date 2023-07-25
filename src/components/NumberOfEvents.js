import React from "react";
import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    const [number, setNumber] = useState(32);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);
        setCurrentNOE(value);

        let errorText;
        if (isNaN(value) || (value < 0)) {
            errorText = "Please enter a valid number";
        } else {
            errorText = null
        }
        setErrorAlert(errorText);
    }

    const handleItemClicked = () => {
        setErrorAlert("")
    };

    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events </label><br/>
            <input
                type="text"
                id="number-of-events-input"
                className="number-of-events-input"
                value={number}
                onChange={handleInputChanged}
                onClick={handleItemClicked}
            />
        </div>
    );
}

export default NumberOfEvents;