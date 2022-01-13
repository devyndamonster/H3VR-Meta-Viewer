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

        for(let col = 0; col < activeFilters.length; col++){
            
            var columnValid = activeFilters[col].length == 0;

            for(let filter = 0; filter < activeFilters[col].length; filter++){
                
                if(String(entry[col]).toLowerCase().includes(String(activeFilters[col][filter]).toLowerCase())){
                    columnValid = true;
                }

            }

            if(!columnValid) return false;
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
