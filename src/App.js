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

    fetch('https://raw.githubusercontent.com/devyndamonster/H3VR-Meta-Viewer/master/public/ObjectData.json')
    .then(function(response){
      return response.text();
    }).then(function(text){

      var entryList = JSON.parse(text);

      console.log("Parsed New Data!");
      console.log(entryList[0]);

      console.log(Object.getOwnPropertyNames(entryList[0]));
      console.log(Object.values(entryList[0]));

      setFields(Object.getOwnPropertyNames(entryList[0]));

      setEntries(entryList.map((entry, index) => {
        return Object.values(entry);
      }))
      
    });

  }

  return (
    <div className="App">
      <NavBar fields={fields}/>

      {entries.length == 0 ? <h1>Loading...</h1> : <DataEntryList fields={fields} entries={entries}/>}

    </div>
  );
}

export default App;
