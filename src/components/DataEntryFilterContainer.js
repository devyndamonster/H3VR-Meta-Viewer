import { useState, useEffect } from "react"
import DataEntryFilter from "./DataEntryFilter";

const DataEntryFilterContainer = ({filters, setFilters, index}) => {

    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        console.log("Filter Updated!");
    }, [filters])

    const handleChange = (event) => {
        setFilterText(event.target.value);
    }

    const addFilter = (event) => {

        if(filterText === "") return;

        console.log("Adding Filter: " + filterText);

        //Add our new filter and create a copy of the base array
        filters[index].push(filterText);
        var newFilters = filters.map((value) => {
            return value;
        })

        setFilters(newFilters);
        setFilterText("");

        event.preventDefault();
    }

    const removeFilter = (filter) => {
        console.log("Removing: " + filter);

        //Remove instances of the given filter, and create a copy of the base array
        filters[index] = filters[index].filter(value => value !== filter);
        var newFilters = filters.map((value) => {
            return value;
        })

        setFilters(newFilters);
    }

    return (
        <td> 
            <div className="filter-entry">
                {filters[index].map((filter, index) => {
                    return <DataEntryFilter key={index} filter={filter} onRemove={removeFilter} />
                })}
            </div> 

            <form onSubmit={addFilter}>
                <input type="text" value={filterText} style={{width:"100%"}} onChange={handleChange}></input>
            </form>
        </td>
    )
}


export default DataEntryFilterContainer
