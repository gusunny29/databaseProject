import playerService from "./player-service"
import teamService, {findTeamById} from "../teams/team-service"


const {Link, useParams} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const PlayerList = () => {
    const [players, setPlayers] = useState([])
    const [team, setTeam] = useState({})
    const {teamId} = useParams();

    useEffect(() => {
        teamId ? findPlayerForTeam(teamId) : findAllPlayers();
        findTeamById();
    }, [])

    const findAllPlayers = () =>
        playerService.findAllPlayers()
            .then(players => setPlayers(players))

    const findPlayerForTeam = () =>
        playerService.findPlayerForTeam(teamId)
            .then(teams => setPlayers(teams))

    const findTeamById = () =>
        teamService.findTeamById(teamId)
            .then(team => setTeam(team))
    return(
        <div>
            <h2>Players</h2>
            <ul className="list-group">
                {
                    players.map(player =>
                        <li key={player.id} className="list-group-item">
                            <Link to={`/teams/${teamId}/players/${player.id}`}>
                                {`${player.firstName} ${player.lastName} ${player.position}`}
                            </Link>
                        </li>)
                }
                <li>
                    {

                        <Link to={team.name ? `/teams/${teamId}/players/create` : '/players/create'}>
                            <button className='create-btn btn btn-primary'>
                                {team.name ? `Add player to ${team.name}` : 'Add player'}
                            </button>
                        </Link>
                    }
                </li>

                <div>
                    <Link to={'/'}>
                        Click to go to homepage!
                    </Link>
                </div>
            </ul>
        </div>
        )
}

export default PlayerList