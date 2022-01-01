import DataEntryFilter from "./DataEntryFilter"
import DataEntryField from "./DataEntryField"

const DataEntryHeader = ({fields}) => {
    return (
        <>
            <tr>
                {fields.map((value, index) => {
                    return <DataEntryFilter key={index} value={value} />
                })}
            </tr>

            <tr>
                {fields.map((value, index) => {
                    return <DataEntryField key={index} value={value} />
                })}
            </tr>
        </>
    )
}

export default DataEntryHeader
