import './styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
import React, {useState} from "react";
import TopBar from "./components/TopBar";
import LibraryCard from "./components/LibraryCard";
import libraries from "./data/Libraries";
import FilterScreen from "./components/FilterScreen";

export default function Homepage(){
    // Filter
    const [openFilterScreen, setFilterScreen] = useState(false)
    const handleFilterScreen = () => {
            setFilterScreen(!openFilterScreen)
    }

    // Krav
    const r = Object.keys(libraries[0]);
    console.log(r)

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
            <div className='filterButton'>
                <button onClick={()=> handleFilterScreen()}>Filter</button>
            </div>
            <div className={`filterScreen ${openFilterScreen ? "active" : ""}`}>
                <FilterScreen event={()=> handleFilterScreen()} requirements={r}></FilterScreen>
            </div>
            <div className='cards'>
                {libraries.map((bib) => (
                    <LibraryCard library={bib} onClickEvent={() => goToLibraryPage()} />
                ))}
            </div>
        </div>
    )
}