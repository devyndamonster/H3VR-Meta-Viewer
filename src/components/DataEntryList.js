
import "../styles/entries.css"
import DataEntry from "./DataEntry"
import DataEntryHeader from "./DataEntryHeader"

const DataEntryList = ({entries, fields}) => {
    return (
        <div>
            <h1>H3VR Meta Viewer</h1>

            <table>

                <thead>
                    <DataEntryHeader fields={fields} />
                </thead>
                

                <tbody>
                    {entries.map((entry, index) => {
                        return <DataEntry key={index} entry={entry} />
                    })}
                </tbody>
                
            </table>

        </div>
    )
}

export default DataEntryList
