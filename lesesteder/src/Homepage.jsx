import './Homepage.css'
import { useNavigate } from 'react-router-dom';
import bilde1 from "./assets/bilde1.png";
import bilde2 from "./assets/bilde2.jpg";
import bilde3 from "./assets/bilde3.jpg";
import TopBar from './components/TopBar';


export default function Homepage(){
    const navigate = useNavigate();
    const goToLibraryPage = () => {
    // Naviger til biblioteksiden
    navigate(`/Library`);
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
            </div>
        </div>
    )
}