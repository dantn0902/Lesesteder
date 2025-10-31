import "../styles/FilterScreen.css"

export default function FilterScreen({onClose, fasiliteter, tjenester, komfor, onOptionToggle} ) {
    //console.log(options);
    const handleSliderChange = (event, outputId) => {
        const output = document.getElementById(outputId);
        output.textContent = event.target.value; // Update the value displayed
    };
    
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
                    <div>
                    <label key={req}>
                    <input type="checkbox" value={req} onChange={(e) => onOptionToggle(e.target.value)}/>
                    {req}
                    </label>
                    </div>
                    <input type="range" min="1" max="5" value="0" className="slider" step="0.5" onChange={(e) => handleSliderChange(e, `output-${req}`)}/>
                    <output id={`output-${req}`} className="value">0</output>
                </div>
            ))}

             <button onClick={ onClose }>Vis</button>
        </div>
       
    )
}