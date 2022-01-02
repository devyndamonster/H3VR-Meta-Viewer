import { useState, useEffect } from "react"
import "../styles/entries.css"
import DataEntry from "./DataEntry"
import DataEntryHeader from "./DataEntryHeader"

const DataEntryList = ({entries, fields}) => {

    const [activeFilters, setActiveFilters] = useState([[""]]);

    if(activeFilters.length !== fields.length){
        setActiveFilters(fields.map((value) => {
            return [];
        }))
    }
    
    const shouldDisplayEntry = (entry) => {

        for(let col = 0; col < entry.length; col++){
            
            if(activeFilters[col].length > 0){
                if(!(activeFilters[col].includes(entry[col]))){
                    return false;
                }
            }
        }

        return true;
    }

    return (
        <div>
            <h1>H3VR Meta Viewer</h1>

            <table>

                <thead>
                    <DataEntryHeader fields={fields} filters={activeFilters} setFilters={setActiveFilters}/>
                </thead>
                
                <tbody>
                    {entries.filter((entry) => {
                        return shouldDisplayEntry(entry);
                    }).map((entry, index) => {
                        return <DataEntry key={index} entry={entry} />
                    })}
                </tbody>
                
            </table>

        </div>
    )
}

export default DataEntryList
