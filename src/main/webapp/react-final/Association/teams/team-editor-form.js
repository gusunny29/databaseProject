import teamService from "./team-service"
import saService from "../sportsAssociations/sa-service"

const {useState, useEffect} = React
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const TeamEditorForm = () => {
    const [team, setTeam] = useState({})
    const [teamCopy, setTeamCopy] = useState({})
    const [sas, setSAs] = useState({})
    const {teamId, saId } = useParams()
    const history = useHistory()

    useEffect(() => {
        findTeamById(teamId)
        findAllSAs()
    }, []);

    const findTeamById = (id) =>
        teamService.findTeamById(id)
            .then(team => {
                setTeam(team)
                setTeamCopy(team)
            });

    const updateTeam = (id, newTeam) =>
        teamService.updateTeam(id, newTeam)
            .then(() => history.goBack())
    const deleteTeam = (id) =>
        teamService.deleteTeam(id)
            .then(() => history.goBack())
    const createTeamForSA = (saId, team) =>
        teamService.createTeamForSA(saId, team)
            .then(() => history.goBack());
    const findAllSAs = () =>
        saService.findAllSAs()
            .then(sas => setSAs(sas))

    return (
        <div>
            <div>
                <Link to={'/'}>
                    Home
                </Link>
            </div>
            <h2>
                Team Editor
            </h2>
            <label> Id </label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={team.id}/>
            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setTeam(team => ({...team, name: e.target.value}))}
                value={team.name}/>
            <label>City</label>
            <input
                className="form-control margin-bottom-10px"
                value={team.city}
                onChange={(e)=>setTeam(team  => ({...team, city: e.target.value}))}/>
            <label>Conference</label>
            <input
                className="form-control margin-bottom-10px"
                value={team.conference}
                onChange={(e)=>setTeam(team => ({...team, conference: e.target.value}))}>
            </input>
            <label>Wins</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={team.wins}
                onChange={(e)=>setTeam(team => ({...team, wins: parseInt(e.target.value)}))}/>
            <label>Losses</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={team.losses}
                onChange={(e)=>setTeam(team => ({...team, losses: parseInt(e.target.value)}))}/>
            <label className="margin-bottom-10px">
            </label>
            <br/>
            <button
                onClick={teamCopy.name ? () => updateTeam(team.id, team) : () => createTeamForSA(saId, team)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteTeam(team.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>

            <br/>
            <br/>
            <div>
                {
                    team.name &&
                    <Link to={`/teams/${team.id}/players`}>
                        Click here to view the roster of the {team.name}.
                    </Link>
                }
            </div>

        </div>
    )
}

export default TeamEditorForm