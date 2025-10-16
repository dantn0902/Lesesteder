import './Homepage.css'
import { useNavigate } from 'react-router-dom';
import bilde1 from "./assets/bilde1.png";
import { Library } from "../Library";


export default function Homepage(){
    const navigate = useNavigate();
    const goToLibraryPage = () => {
        navigate(`/Library`); // Naviger til biblioteksiden
    };
    return(
        <div className='content'>
            <TopBar></TopBar>
            <div className='title'>
                 <h1>
                Lesesteder
                </h1>
                <p>
                UiO
                </p>
            </div>  
            <div className='cards'>
                <div className="library-card" onClick={() => goToLibraryPage()}>
                    <img src={bilde1} width='180px'></img>
                    <h3>Sophus Bugge bib.</h3>
                    <p>Åpningstid: 8:00 - 16:00</p>

                </div> 
                <div className="library-card" onClick={() => goToLibraryPage()}>
                     <img src={bilde1} width='180px'></img>
                     <h3>Realfagsbib.</h3>
                     <p>Åpningstid: 8:00 - 16:00</p>
                </div> 
                <div className="library-card" onClick={() => goToLibraryPage()}>
                     <img src={bilde1} width='180px'></img>
                     <h3>Helga Engh bib.</h3>
                     <p>Åpningstid: 8:00 - 16:00</p>
                </div> 
                <div className="library-card" onClick={() => goToLibraryPage()}>
                     <img src={bilde1} width='180px'></img>
                     <h3>IFI bib.</h3>
                     <p>Åpningstid: 8:00 - 16:00</p>
                </div> 
                {/*
                const [libraries, setLibraries] = useState([]);
                {libraries.map((b, i)=>(
                    <div className="library-card" onClick={() => goToLibraryPage()}>
                        <img src={bilde1} width='180px'></img>
                        <h3>Sophus Bugge bib.</h3> //<BeachCard key={i} beach={b} />
                        <p>Åpningstid: 8:00 - 16:00</p>
                    </div> 
                ))}
                */}
            </div>
        </div>
    )
}