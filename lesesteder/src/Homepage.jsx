import './styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect, useMemo} from "react";
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
    const f = useMemo(() => {
        return Object.keys(librariesData[0].fasiliteter);
    }, []);
    const t = useMemo(() => {
        return Object.keys(librariesData[0].tjenester);
    }, []);
    const k = useMemo(() => {
        return Object.keys(librariesData[0].komfor);
    }, []);

    // Filter 
    const [libraries, setLibraries] = useState(librariesData);
    const [filtersOn, setFiltersOn] = useState([]); // Array for aa ta vare paa filtere som bruker har trykket
    const handleFilterChange = (key, value) => {
    // If only one argument, it came from checkbox
        if (value === undefined) {
            setFiltersOn((prevFilters) => {
            if (prevFilters.includes(key)) {
                return prevFilters.filter((filter) => filter !== key);
            } else {
                return [...prevFilters, key];
            }
            });
        } else {
            // It’s a slider update — store komfor value
            setLibraries((prevLibs) =>
            librariesData.filter((library) =>
                library.komfor[key] >= value // or some comparison logic
            )
            );
        }
    };

    // Update libraries with filtered results
     useEffect(() => {
        //console.log("Current filters:", filtersOn);

         const filteredLibraries = librariesData.filter(library =>
            filtersOn.every(filter => library.fasiliteter[filter] || library.komfor[filter] || library.tjenester[filter]) // make sure library matches all filters
        );

        console.log("Filtered libraries:", filteredLibraries);
        setLibraries(filteredLibraries); // Update libraries with filtered results

    }, [filtersOn]); // makes it so it is triggered when filtersOn changes

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
                <FilterScreen onClose={()=> handleFilterScreen()} fasiliteter={f} tjenester={t} komfor={k} onOptionToggle={handleFilterChange} />
            </div>
            <div className='cards'>
                {libraries.map((bib) => (
                    <LibraryCard library={bib} onClickEvent={() => goToLibraryPage()} />
                ))}
            </div>
        </div>
    )
}