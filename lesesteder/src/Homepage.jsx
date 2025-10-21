import './Homepage.css'
import { useNavigate } from 'react-router-dom';
import TopBar from "./components/TopBar";
import LibraryCard from "./components/LibraryCard";
import libraries from "./data/Libraries";

export default function Homepage(){
    // Navigasjon
    const navigate = useNavigate();
    const goToLibraryPage = () => {
        navigate(`/Library`);
    };

    // const [libraries, setLibraries] = useState([]);
    return(
        <div className='content'>
            <TopBar></TopBar>
            <div className='title'>
                <p>
                UiO
                </p>
            </div>  
            <div className='cards'>
                {libraries.map((bib) => (
                    <LibraryCard library={bib} onClickEvent={() => goToLibraryPage()} />
                ))}
            </div>
        </div>
    )
}