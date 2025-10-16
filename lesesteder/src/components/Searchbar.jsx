import './Searchbar.css'
import {useState} from 'react';

export default function Searchbar(){
    return(
        <div>
            <div className="search">
                <input 
                    class="searchbox" 
                    placeholder="søk etter lesesteder ...">
                </input>
                <div class="addButton">
                    <button id="addButton"  >
                        Søk
                    </button>
            </div>
            </div>   
        </div>
    )
}