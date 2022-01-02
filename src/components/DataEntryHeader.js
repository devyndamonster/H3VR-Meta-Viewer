import DataEntryFilterContainer from "./DataEntryFilterContainer"
import DataEntryField from "./DataEntryField"

const DataEntryHeader = ({fields, filters, setFilters}) => {
    return (
        <>
            <tr>
                {fields.map((value, index) => {
                    return <DataEntryFilterContainer key={index} value={value} filters={filters} setFilters={setFilters} index={index}/>
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
