import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import './App.css';
import { useState, useEffect } from 'react';
import { extractLocations, getEvents } from './api';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState();
  const [warningAlert, setWarningAlert] = useState("");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    console.log("filteredEvents: ", filteredEvents);

    if (filteredEvents !== undefined) {
      setEvents(filteredEvents.slice(0, currentNOE));
    }
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    let warningMessage
    if (navigator.onLine) {
      warningMessage = ""
    } else {
      warningMessage = "The displayed list has been loaded from your cache"
    }
    setWarningAlert(warningMessage);
    fetchData();
  }, [currentCity, currentNOE]);

  console.log("currentNOE: ", currentNOE);

  return (
    <div className="App">
      <div className="alerts-container" setWarningAlert={setWarningAlert}>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <h1>Connect</h1>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
      <EventList events={events} />
    </div>
  );
}

export default App;