import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import './App.css';
import { useState, useEffect } from 'react';
import { extractLocations, getEvents } from './api';
import { motion } from "framer-motion"

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState();
  const [warningAlert, setWarningAlert] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      const filteredEvents = currentCity === "See all cities" ?
        allEvents : allEvents.filter(event => event.location === currentCity);

      if (filteredEvents !== undefined) {
        setEvents(filteredEvents.slice(0, currentNOE));
        setAllLocations(extractLocations(allEvents));
      }
    }

    let warningMessage;

    if (navigator.onLine) {
      warningMessage = ""
    } else {
      warningMessage = "The displayed list has been loaded from your cache"
    }
    setWarningAlert(warningMessage);
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <motion.div className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <div className="alerts-container" setwarningalert={setWarningAlert}>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 720
        }}
        transition={{ duration: .75 }}
      >Connect</motion.h1>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
      <div className='charts-container'>
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </motion.div>
  );
}

export default App;