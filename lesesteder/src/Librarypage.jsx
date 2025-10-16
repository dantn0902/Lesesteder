import './Library.css'
import { useNavigate } from 'react-router-dom';

export default function Library(){
    const navigate = useNavigate();
    const goToHomePage = () => {
    // Naviger til biblioteksiden
    navigate(`/`);
  };
    return(
        <div>
            <p>
            Library
            </p>
            <div className="homepage-card" onClick={() => goToHomePage()}>
                <p>go to homepage</p>
            </div> 
        </div>
    )
}