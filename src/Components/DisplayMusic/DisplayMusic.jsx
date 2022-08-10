

const DisplayMusic = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"> Title</th>
                    <th scope="col"> Artist</th>
                    <th scope="col"> Album</th>
                    <th scope="col"> Release Date</th>
                    <th scope="col"> Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.allSongs.map((song) => {
                    return (
                    <tr>   
                        <td scope="row">{song.title}</td>
                        <td scope="row">{song.artist}</td>
                        <td scope="row">{song.album}</td>
                        <td scope="row">{song.release_date}</td>
                        <td scope="row">{song.genre}</td>
                        </tr>     
                    );
                })}
            </tbody>
        </table>
    )
}

export default DisplayMusic;