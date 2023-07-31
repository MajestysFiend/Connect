import { useState } from "react";
import { motion } from 'framer-motion';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <motion.li className="event"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: .5 }}>
            <h2>{event && event.summary}</h2>
            <p className="location">{event && event.location}</p>
            <p className="time">{event && (new Date(event.created)).toUTCString()}</p>
            {showDetails ?
                <p className="details">{event && event.description}</p> :
                null
            }
            <button
                className="details-btn"
                onClick={() => {
                    showDetails ? setShowDetails(false) : setShowDetails(true)
                }}>{showDetails ? "hide details" : "show details"}</button>
        </motion.li>
    )
}

export default Event;