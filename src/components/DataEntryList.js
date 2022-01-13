import { useState, useEffect } from "react"
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

        console.log(activeFilters);

        for(let col = 0; col < activeFilters.length; col++){
            
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
