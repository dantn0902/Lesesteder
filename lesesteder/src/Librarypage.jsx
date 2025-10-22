import './Librarypage.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function Librarypage(){
    const { id } = useParams();
    const navigate = useNavigate();
    const goToHomePage = () => {
    // Naviger til biblioteksiden
    navigate(`/`);
  };
    return(
        <div>
            <h3>
            {id}
            </h3>
            <div className="homepage-card" onClick={() => goToHomePage()}>
                <p>go to homepage</p>
            </div> 
        </div>
    )
}