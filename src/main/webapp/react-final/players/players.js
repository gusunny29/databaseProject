import Player from "./player";

const { useState, useEffect } = React;

const Players = () => {
    const [players, setPlayers] = useState([])
    const [newPlayer, setNewPlayer] = useState({})
    const createPlayer = (player) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/players`, {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(player => setPlayers(players => ([...players, player])))
    const updatePlayer = (id, newPlayer) =>
        fetch(`http://localhost:8080/orm/update/player/${id}/${newPlayer.password}`)
            .then(response => response.json())
            .then(player => setPlayers(players => (players.map(player => player._id === id ? newPlayer : player))))
    const findAllPlayers = () =>
        fetch(`http://localhost:8080/orm/find/players`)
            .then(response => response.json())
            .then(players => setPlayers(players))
    const deletePlayer = (id) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/players/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(players => setPlayers(players => players.filter(player => player._id !== id)))
    useEffect(() => {
        findAllPlayers()
    }, [])
    return(
        <div>
            <h2>Players {players.length}</h2>
            <input value={newPlayer.title}
                   onChange={(e) => setNewPlayer(newPlayer => ({...newPlayer, title: e.target.value}))}/>
            <input value={newPlayer.owner}
                   onChange={(e) => setNewPlayer(newPlayer => ({...newPlayer, owner: e.target.value}))}/>
            <button onClick={() => createPlayer(newPlayer)}>Create</button>
            {
                players.map(player =>
                    <Player key={player._id}
                        updatePlayer={updatePlayer}
                        deletePlayer={deletePlayer}
                        player={player}/>)
            }
        </div>
    )
}

export default Players;


