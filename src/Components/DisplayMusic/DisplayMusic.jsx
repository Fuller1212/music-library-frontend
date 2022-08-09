

const DisplayMusic = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th> Title</th>
                    <th> Artist</th>
                    <th> Album</th>
                    <th> Release Date</th>
                    <th> Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.allSongs.map((response) => {
                    return (
                    <tr>   
                        <td>{response.title}</td>
                        <td>{response.artist}</td>
                        <td>{response.album}</td>
                        <td>{response.release_date}</td>
                        <td>{response.genre}</td>
                        </tr>     
                    );
                })}
            </tbody>
        </table>
    )
}

export default DisplayMusic;