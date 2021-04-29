import teamService, {findAllTeams} from './team-service'
import saService, {findSAById} from "../sportsAssociations/sa-service"

const TEAM_URL = "http://localhost:8080/api/teams"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const TeamList = () => {
    const [teams, setTeams] = useState([])
    const [sa, setSA] = useState([])
    const [newSA, setNewSA] = useState({});
    const {saId} = useParams()

    useEffect(() => {
        saId ? findTeamForSA(saId) : findAllTeams();
        findSAById(saId)
    }, [])

    const findAllTeams = () =>
        teamService.findAllTeams()
            .then(teams => setTeams(teams))

    const findTeamForSA = () =>
        teamService.findTeamsForSA(saId)
            .then(teams => setTeams(teams))

    const findSAById = () =>
        saService.findSAById(saId)
            .then(sa => setSA(sa))




    return(
        <div>
            <div>
                <Link to={'/'}>
                    Home
                </Link>
            </div>
            <h2>Teams</h2>
            <ul className="list-group">
                {
                    teams.map(team =>
                        <li key={team.id} className="list-group-item">
                            <Link to={`/sportsAssociations/${saId}/teams/${team.id}`}>
                                {`${team.name}`}
                            </Link>
                        </li>)
                }
                <li>
                    {

                        <Link to={`/sportsAssociations/${saId}/teams/create`}>
                            <button className='create-btn btn btn-primary'>
                                {sa.sport ?
                                    `Add Team for ${sa.sport}` : 'Add Team'}
                            </button>
                        </Link>
                    }

                </li>
            </ul>
        </div>
    )
};

export default TeamList;