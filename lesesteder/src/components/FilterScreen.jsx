import "../styles/FilterScreen.css"

export default function FilterScreen({onClose, fasiliteter, tjenester, komfor, onOptionToggle} ) {
    //console.log(options);
    return (
        <div className="container">
            <h3>Fasiliteter og kapasitet</h3>
            {fasiliteter.map((req) => (
                <label key={req}>
                    <input type="checkbox" value={req} onChange={(e) => onOptionToggle(e.target.value)}/>
                    {req}
                </label>
            ))}

            <h3>Tjenester og nærområder</h3>
            {tjenester.map((req) => (
                <label key={req}>
                    <input type="checkbox" value={req} onChange={(e) => onOptionToggle(e.target.value)}/>
                    {req}
                </label>
            ))}

            <h3>Miljø og komfort</h3>
            {komfor.map((req) => (
                <div>
                    <label key={req}>
                    <input type="checkbox" value={req} onChange={(e) => onOptionToggle(e.target.value)}/>
                    {req}
                    </label>
                    <input type="range" min="1" max="5" value="0" class="slider" step="0.5"/>
                </div>
            ))}

             <button onClick={ onClose }>Vis</button>
        </div>
       
    )
}