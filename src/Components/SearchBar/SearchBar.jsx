import './SearchBar.css'
import axios from 'axios';


const SearchBar = (props) => {
    
    async function artistFilter() {
        let response = await axios.get('http://127.0.0.1:8000/api/song/');
        let userInput = prompt('Search by artist name ');
        let newSongChoices = response.data.filter(function(song){
            if (song.artist === userInput) {
                return newSongChoices
            }
            else{
                alert('No artist matches search')
            }
        })
    }
    async function albumFilter() {
        let response = await axios.get('http://127.0.0.1:8000/api/song/');
        let userInput = prompt('Search by albuum name ')
        let newSongChoices = response.data.filter(function(song){
            if(song.album === userInput){
                return newSongChoices
            }
            else{
                alert('No album matches search')
            }
        })
    }
    async function releaseDateFilter() {
        let response = await axios.get('http://127.0.0.1:8000/api/song/');
        let userInput = prompt('Search by songs release date ')
        let newSongChoices = response.data.filter(function(song){
            if(song.release_date === userInput){
                return newSongChoices
            }
            else{
                alert('No release date matches search')
            }
        })
    }
    async function genreFilter(){
        let response = await axios.get('http://127.0.0.1:8000/api/song/');
        let userInput = prompt('Search by genre')
        let newSongChoices = response.data.filter(function(song){
            if(song.genre === userInput){
                return newSongChoices
            }
            else{
                alert('No genre matches search')
            }
        })
    }
    
    return ( 
       <div>
            <div className='col'>   
            
                <label>Artist</label>
                <input type='text'></input>
                <button onClick={artistFilter}>Filter</button>
           
                <label>Album</label>
                <input type='text'></input>
                <button onClick={albumFilter}>Filter</button>
             
                <label>Release Date</label>
                <input type='date'></input>
                <button onClick={releaseDateFilter}>Filter</button>
             
                <label>Genre</label>
                <input type='text'></input>
                <button onClick={genreFilter}>Filter</button>
            </div>
            
      
       </div>
     );
    }
 
export default SearchBar;