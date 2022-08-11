import './SearchBar.css'
import axios from 'axios';


const SearchBar = (props) => {
    
    async function artistFilter() {
        let userInput = prompt('Search by artist name ');
        let filteredSongs = props.allSongs.filter(function(song){
            if (song.artist === userInput) {
                return true
            }
        });
        props.newSongList(filteredSongs)
    }
    async function albumFilter() {
        let userInput = prompt('Search by album name ')
        let filteredSongs = props.allSongs.filter(function(song){
            if(song.album === userInput){
                return true
            }
            
        });
        props.newSongList(filteredSongs)
    }
    async function releaseDateFilter() {
        let userInput = prompt('Search by songs release date ')
        let filteredSongs = props.allSongs.filter(function(song){
            if(song.release_date === userInput){
                return true
            }
        });
        props.newSongList(filteredSongs)
    }
    async function genreFilter(){
        let userInput = prompt('Search by genre')
        let filteredSongs = props.allSongs.filter(function(song){
            if(song.genre === userInput){
                return true
            }
        });
        props.newSongList(filteredSongs)
    }
    
    return ( 
       <div>
            <div className='col'>   
            
                <label>Artist</label>
                <button onClick={artistFilter}>Filter</button>
           
                <label>Album</label>
                <button onClick={albumFilter}>Filter</button>
             
                <label>Release Date</label>
                <input type='date'></input>
                <button onClick={releaseDateFilter}>Filter</button>
             
                <label>Genre</label>
                <button onClick={genreFilter}>Filter</button>
            </div>
            
      
       </div>
     );
    }
 
export default SearchBar;