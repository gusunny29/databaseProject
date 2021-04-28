const {Link} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const PlayerList = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('https://localhost:8080/api/players')
            .then(response => response.json())
            .then(players => setPlayers(players))
    }, [])

    return(
        <div>
            <h2>Players</h2>
            <ul className="list-group">
                {
                    players.map(player =>
                        <li key={player.id} className="list-group-item">
                            <Link to={`/`}>
                                {`${player.firstName} ${player.lastName} ${player.position}`}
                            </Link>
                        </li>)
                }
                <li>

                    <Link to={'/'}>
                        <button className='create-btn btn btn-primary'>
                            {`Add player`}
                        </button>
                    </Link>

                </li>
            </ul>
        </div>
        )
}

export default PlayerList