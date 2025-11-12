import "../styles/FilterScreen.css";

export default function FilterScreen({
  onClose,
  fasiliteter,
  tjenester,
  komfor,
  onOptionToggle,
}) {
  //console.log(options);
  const handleSliderChange = (event, req) => {
    const value = parseFloat(event.target.value);
    onOptionToggle(req, value); // send req + numeric value
  };
  return (
    <div className="container">
      <h3>Fasiliteter og kapasitet</h3>
      {fasiliteter.map((req) => (
        <label key={req}>
          <input
            type="checkbox"
            value={req}
            onChange={(e) => onOptionToggle(e.target.value)}
          />
          {req}
        </label>
      ))}

      <h3>Tjenester og nærområder</h3>
      {tjenester.map((req) => (
        <label key={req}>
          <input
            type="checkbox"
            value={req}
            onChange={(e) => onOptionToggle(e.target.value)}
          />
          {req}
        </label>
      ))}

      <h3>Miljø og komfort</h3>
      {komfor.map((req) => (
        <div key={req}>
          <p value={req}>{req}</p>
          <input
            type="range"
            min="1"
            max="5"
            defaultValue="0"
            step="0.5"
            className="slider"
            onChange={(e) => handleSliderChange(e, req)}
          />
          {/*<output id={`output-${req}`} className="value">0</output>*/}
        </div>
      ))}

      <button onClick={onClose}>Vis</button>
    </div>
  );
}
