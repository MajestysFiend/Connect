import React from "react";

const NumberOfEvents = ({ eventNumber, onEventNumberChange }) => {
    const handleInputChanged = (value) => {
        onEventNumberChange(value);
    };

    return (
        <div id="event-number">
            <input
                type="text"
                className="textbox"
                placeholder="32"
                value={eventNumber}
                onChange={(e) => handleInputChanged(e.target.value)}
            />
        </div>
    );
};
export default NumberOfEvents;