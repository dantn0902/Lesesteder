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
    
    // Filter screen
    const [openFilterScreen, setFilterScreen] = useState(false)
    const handleFilterScreen = () => setFilterScreen(!openFilterScreen);

    // options for filter
    const r = useMemo(() => {
        console.log("keys computed");
        return Object.keys(librariesData[0]);
    }, []);

    // Filter 
    const [libraries, setLibraries] = useState(librariesData);
    const [filtersOn, setFiltersOn] = useState([]); // Array for aa ta vare paa filtere som bruker har trykket
    const handleFilterChange = (update) => {
        console.log("Updating filter:", update);
        console.log("Previous filters:", filtersOn);
        setFiltersOn(prevFilters => {
            if (prevFilters.includes(update)) {
                return prevFilters.filter(filter => filter !== update); // remove option
            } else {
                return [...prevFilters, update]; // add option
            }
        });
        console.log("Current filters:", filtersOn);
    }

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
                <FilterScreen onClose={()=> handleFilterScreen()} options={r} onOptionToggle={handleFilterChange}></FilterScreen>
            </div>
            <div className='cards'>
                {libraries.map((bib) => (
                    <LibraryCard library={bib} onClickEvent={() => goToLibraryPage()} />
                ))}
            </div>
        </div>
    )
}