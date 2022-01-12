import { useState, useEffect} from "react"
import DataEntryList from "./components/DataEntryList";
import NavBar from "./components/NavBar";
import Papa from 'papaparse';
import "./styles/entries.css"


function App() {

  const [entries, setEntries] = useState([])
  const [fields, setFields] = useState(["Loading!"])

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = () => {

    fetch('https://raw.githubusercontent.com/devyndamonster/H3VR-Meta-Viewer/master/public/ObjectIDs.csv')
    .then(function(response){
      return response.text();
    }).then(function(text){
      const csv = Papa.parse(text);
      console.log("Parsed New Data!");

      setEntries(csv.data.slice(1));
      setFields(csv.data[0]);

      console.log(fields);
    });

  }

  return (
    <div className="App">
      <NavBar />

      {entries.length == 0 ? <h1>Loading...</h1> : <DataEntryList fields={fields} entries={entries}/>}

    </div>
  );
}

export default App;
