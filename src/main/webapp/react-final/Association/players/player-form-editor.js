import playerService from "./player-service"
import teamService, {findTeamById} from "../teams/team-service"


const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;


const PlayerFormEditor = () => {
        const [player, setPlayer] = useState({})
        const [playerCopy, setPlayerCopy] = useState({})
        const [team, setTeam] = useState({})
        const {teamId, playerId} = useParams();
        const history = useHistory();

        useEffect(() => {
                findPlayerById(playerId);
                findTeamById(teamId)
        }, [])
        const findPlayerById = (id) =>
            playerService.findPlayerById(id)
                .then(player => {
                        setPlayer(player);
                        setPlayerCopy(player);
                });

        const updatePlayer = (id, newPlayer) =>
            playerService.updatePlayer(id, newPlayer)
                .then(() => history.goBack());

        const deletePlayer = (id) =>
            playerService.deletePlayer(id)
                .then(() => history.goBack());

        const createPlayerForTeam = (teamId, team) =>
            playerService.createPlayerForTeam(teamId, team)
                .then(() => history.goBack());

        const findTeamById = () =>
            teamService.findTeamById(teamId)
                .then(team => setTeam(team));

        return (
        <div>
                <h2>
                        Player Editor
                </h2>

                <label> Id </label>
                <input
                    className="form-control margin-bottom-10px"
                    readOnly={true}
                    value={player.id}/>
                <label> Position</label>
                <input
                    className="form-control margin-bottom-10px"
                    onChange={(e) => setPlayer(player => ({...player, position: e.target.value}))}
                    value={player.position}/>
                <label>Years Playing</label>
                <input
                    type='number'
                    className="form-control margin-bottom-10px"
                    onChange={(e)=>setPlayer(player => ({...player, yearsPlaying: parseInt(e.target.value)}))}
                    value = {player.yearsPlaying}/>
                <label>First Name</label>
                <input
                    className="form-control margin-bottom-10px"
                    value={player.firstName}
                    onChange={(e)=>setPlayer(player => ({...player, firstName: e.target.value}))}/>
                <label>Last Name</label>
                <input
                    className="form-control margin-bottom-10px"
                    value={player.lastName}
                    onChange={(e)=>setPlayer(player => ({...player, lastName: e.target.value}))}/>
                <label>Username</label>
                <input
                    className="form-control margin-bottom-10px"
                    value={player.username}
                    onChange={(e)=>setPlayer(player => ({...player, username: e.target.value}))}/>
                <label>Password</label>
                <input
                    className="form-control margin-bottom-10px"
                    value={player.password}
                    onChange={(e)=>setPlayer(player => ({...player, password: e.target.value}))}/>
                <label>Email</label>
                <input
                    className="form-control margin-bottom-10px"
                    value={player.email}
                    onChange={(e)=>setPlayer(player => ({...player, email: e.target.value}))}/>



                <button
                    onClick={playerCopy.firstName ? () => updatePlayer(player.id, player) : () => createPlayerForTeam(teamId, player)}
                    className="btn btn-success btn-block">Save</button>

                <button
                    onClick={() => {
                            history.goBack()
                    }}
                    className="btn btn-danger btn-block margin-left-10px">Cancel</button>
                <button
                    onClick={() => deletePlayer(player.id)}
                    className="btn btn-danger btn-block margin-left-10px">Delete</button>


                <br/>
                <br/>


        </div>
    )
}

export default PlayerFormEditor