import './Homepage.css'
import { useNavigate } from 'react-router-dom';
import bilde1 from "./assets/bilde1.png";
import { Library } from "./Library";

export default function Homepage(){
    // Navigasjon
    const navigate = useNavigate();
    const goToLibraryPage = () => {
        navigate(`/Library`);
    };

    // const [libraries, setLibraries] = useState([]);
    const libraries = [
        new Library("Sophus Bugge bib.", bilde1),
        new Library("Realfagsbib.", bilde1),
        new Library("Helga Engh bib.", bilde1),
        new Library("IFI bib.", bilde1),
    ];
    return(
        <div className='content'>
            {/*<TopBar></TopBar>*/}
            <div className='title'>
                 <h1>
                Lesesteder
                </h1>
                <p>
                UiO
                </p>
            </div>  
            <div className='cards'>
                {libraries.map((bib, i)=>(
                    <div  key={i} className="library-card" onClick={() => goToLibraryPage()}>
                        <img src={bib.bilde} width='180px'></img>
                        <h3>{bib.navn}</h3>
                        <p>Åpningstid: {bib.åpent} - {bib.stengt}</p>
                    </div> 
                ))}
            </div>
        </div>
    )
}