import React from 'react'

const DataEntryFilter = ({filter, onRemove}) => {
    return (
        <div>
            <button>{filter}</button>
            <button onClick={() => onRemove(filter)}>X</button>
        </div>
    )
}

export default DataEntryFilter
