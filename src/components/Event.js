import { useState } from "react";

const Event = ({ event }) => {
    const [hidden, setHidden] = useState(true);

    const toggleInfo = () => {
        setHidden(!hidden);
    };

    return (
        <li>
            <h1 className="event-title">{event.summary}</h1>
            <p className="event-date">{event.created}</p>
            <p className="event-location">{event.location}</p>
            {hidden && (<button onClick={toggleInfo}>show details</button>)}
            {!hidden && (<>
                <div>{event.description}</div>
                <button onClick={toggleInfo}>hide details</button>
            </>)}

        </li>
    );
}

export default Event;