import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css'

function Search() {
    return (
        <div className='search'>
            <div className='search-input'>
                <SearchIcon className='search-inputIcon'/>
                <input />
                <MicIcon />
            </div>

            <div className='search-buttons'>

            </div>
        </div>
    )
}

export default Search
