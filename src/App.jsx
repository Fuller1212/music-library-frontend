import React, {useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './App.css';
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    getAllSongs();
}, [])


  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/song/');
    setSongs(response.data);
    console.log(response.data)
  }
  async function newSongList(newSongs){
    setSongs(newSongs);
    console.log(newSongs)
  }   
  

return(
  <div className="container-fluid">
    <div className="border-box">
      <DisplayMusic allSongs={songs}/>
    </div>
    <div>
      <SearchBar allSongs={songs} newSongList = {newSongList}/>
    </div>
  </div>
)
}

export default App;
