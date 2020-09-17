import React from 'react';
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
// import Response from "../response";
import {Link} from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ImageIcon from '@material-ui/icons/Image';
import DescriptionIcon from '@material-ui/icons/Description';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();

    //Live API call
    const { data } = useGoogleSearch(term);

    //use previous search results for development purpose since API only accepts 100 calls per day
    // const data = Response;
    
    console.log(data)
    
    return (
        <div className='searchPage'>
            <div className='searchPage-header'>
                <Link to="/">
                    <img
                        className='searchPage-logo' 
                        src="https://computerhistory.org/wp-content/uploads/2019/06/New-Google-Logo-great.jpg"
                        alt='goggle logo'
                    />
                </Link>
                <div className='searchPage-headerBody'>
                    <Search hideButtons />

                    <div className='searchPage-options'>
                        <div className='searchPage-optionsLeft'>
                            <div className='searchPage-option'>
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className='searchPage-option'>
                                <DescriptionIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className='searchPage-option'>
                                <ImageIcon />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className='searchPage-option'>
                                <LocalOfferIcon />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className='searchPage-option'>
                                <RoomIcon />
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className='searchPage-option'>
                                <MoreVertIcon />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>

                        <div className='searchPage-optionsRight'>
                            <div className='searchPage-option'>
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className='searchPage-option'>
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className='searchPage-results'>
                    <p className='searchPage-resultsCount'>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
                    
                    {data?.items.map(item => (
                        <div className='searchPage-result'>
                            <a className='searchPage-resultLink' href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className='searchPage-resultImage' src={item.pagemap?.cse_image[0]?.src} alt="" />
                                )} 
                                {item.displayLink}
                            </a>
                            <a className='searchPage-resultTitle' href={item.link}> <h2>{item.title}</h2></a>
                            <p className='searchPage-resultSnippet'>{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}


export default SearchPage;

