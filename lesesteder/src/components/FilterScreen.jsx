import "../styles/FilterScreen.css"

export default function FilterScreen( {onClose, options, onOptionToggle} ) {
    return (
        <div className="container">
            <h3>Fasiliteter og kapasitet</h3>
            {options.map((req) => (
                <label key={req}>
                    <input type="checkbox" value={req} onChange={(e) => onOptionToggle(e.target.value)}/>
                    {req}
                </label>
            ))}
            <h3>Tjenester og nærområder</h3>

            <h3>Miljø og komfort</h3>

             <button onClick={ onClose }>Vis</button>
        </div>
       
    )
}