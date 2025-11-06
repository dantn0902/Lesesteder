export default function LibraryCard({ library, onClickEvent }){
    return(
        <div className="library-card" onClick={onClickEvent}>
            <img src={library.praktisk.bilde} width='180px' alt={`${library.praktisk.navn} bilde`} />
            <h3>{library.praktisk.navn}</h3>
            <p>Åpningstid: {library.praktisk.åpent} - {library.praktisk.stengt}</p>
        </div> 
    )
}