import { useState, useEffect} from "react"
import DataEntryList from "./components/DataEntryList";
import Papa from 'papaparse';


function App() {

  const [entries, setEntries] = useState([])
  const [fields, setFields] = useState(["Loading!"])

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = () => {

    fetch('https://raw.githubusercontent.com/devyndamonster/TakeAndHoldTweaker/master/ObjectIDs.csv')
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

      <DataEntryList fields={fields} entries={entries}/>
    </div>
  );
}

export default App;
