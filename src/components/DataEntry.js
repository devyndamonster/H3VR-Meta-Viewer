
import DataEntryField from "./DataEntryField"

const DataEntry = ({entry}) => {

    return (
        <tr>
            {entry.map((value, index) => {
                return <DataEntryField key={index} value={value} />
            })}
        </tr>
    )
}

DataEntry.defaultProps = {
    color: "grey",
}

export default DataEntry
