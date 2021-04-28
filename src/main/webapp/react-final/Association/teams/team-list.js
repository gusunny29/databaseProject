import TeamEditorInline from "./team-editor-inline";
import teamService, {createTeamForSA} from "./team-service"

const TEAM_URL = "http://localhost:8080/api/teams"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const TeamList = () => {
    const [teams, setTeams] = useState([])
    const [newTeam, setNewTeam] = useState({})
    const {saId} = useParams()
    useEffect(() => {
        findTeamsForSA(saId)
    }, [])
    const createTeamForSA = (team) =>
        teamService.createTeamForSA(saId, team)
            .then(team => {
                setNewTeam({name:''})
                setTeams(teams => ([...teams, team]))
            })
    const updateTeam = (id, newTeam) =>
        teamService.updateTeam(id, newTeam)
            .then(team => setTeams(teams => (teams.map(team => team.id === id ? newTeam : team))))
    const findTeamsForSA = (saId) =>
        teamService.findTeamsForSA(saId)
            .then(teams => setTeams(teams))
    const deleteTeam = (id) =>
        teamService.deleteTeam(id)
            .then(teams => setTeams(teams => teams.filter(team => team.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Teams
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Team Name"
                                   name="Please enter a name for the team"
                                   className="form-control"
                                   value={newTeam.name}
                                   onChange={(e) => setNewTeam(newTeam => ({...newTeam, name: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createTeamForSA(newTeam)}></i>
                        </div>
                    </div>
                </li>
            {
                teams.map(team =>
                    <li key={team.id} className="list-group-item">
                        <TeamEditorInline key={team._id}
                                          updateTeam={updateTeam}
                                          deleteTeam={deleteTeam}
                                          team={team}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default TeamList;