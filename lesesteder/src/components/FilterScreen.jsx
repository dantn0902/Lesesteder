import "../styles/FilterScreen.css"

export default function FilterScreen( {event, requirements} ) {
    return (
        <div className="container">
            <h3>Fasiliteter og kapasitet</h3>
            {requirements.map((req) => (
            <label key={req}>
                <input type="checkbox" value={req} />
                {req}
            </label>
            ))}

            <h3>Tjenester og nærområder</h3>

            <h3>Miljø og komfort</h3>

             <button onClick={ event }>Vis</button>
        </div>
       
    )
}