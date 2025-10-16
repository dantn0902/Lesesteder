import './Homepage.css'
import { useNavigate } from 'react-router-dom';

export default function Homepage(){
    const navigate = useNavigate();
    const goToLibraryPage = () => {
    // Naviger til biblioteksiden
    navigate(`/Library`);
  };
    return(
        <div className='content'>
            <div className='title'>
                 <h1>
                Lesesteder
                </h1>
                <p>
                UiO
                </p>
            </div>  
            <div className="library-card" onClick={() => goToLibraryPage()}>
                <p>go to library</p>
            </div> 
        </div>
    )
}