import './styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
import React, {useState, useMemo} from "react";
import TopBar from "./components/TopBar";
import LibraryCard from "./components/LibraryCard";
import librariesData from "./data/Libraries";
import FilterScreen from "./components/FilterScreen";

export default function Homepage(){
    // Navigasjon
    const navigate = useNavigate();
    const goToLibraryPage = () => {
        navigate(`/Library`);
    };
    
    // Filter
    const [openFilterScreen, setFilterScreen] = useState(false)
    const handleFilterScreen = () => setFilterScreen(!openFilterScreen);

    // Krav
    const r = useMemo(() => {
        console.log("keys computed");
        return Object.keys(librariesData[0]);
    }, []);

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
                {librariesData.map((bib) => (
                    <LibraryCard library={bib} onClickEvent={() => goToLibraryPage()} />
                ))}
            </div>
        </div>
    )
}