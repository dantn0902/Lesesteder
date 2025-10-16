import React from 'react';

export default function LibraryCard({ library, onClick }){
    return(
        <div className="library-card" onClick={onClick}>
            <img src={library.bilde} width='180px' alt={`${library.navn} bilde`} />
            <h3>{library.navn}</h3>
            <p>Åpningstid: {library.åpent} - {library.stengt}</p>
        </div> 
    )
}