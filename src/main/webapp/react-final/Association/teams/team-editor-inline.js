const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const TeamEditorInline = ({team, deleteTeam, updateTeam}) => {
    const [teamCopy, setTeamCopy] = useState(team)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <label>Name</label>
                        <input
                            className="form-control"
                            value={teamCopy.name}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, name: e.target.value}))}/>
                    </div>
                    <label>City</label>
                    <div className="col">
                        <input
                            className="form-control"
                            value={teamCopy.city}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, city: e.target.value}))}/>
                    </div>
                    <label>Conference</label>
                    <div className="col">
                        <input
                            className="form-control"
                            value={teamCopy.conference}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, conference: e.target.value}))}/>
                    </div>
                    <label>Wins</label>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={teamCopy.wins}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, wins: parseInt(e.target.value)}))}/>
                    </div>
                    <label>Losses</label>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={teamCopy.losses}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, losses: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateTeam(teamCopy.id, teamCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteTeam(team.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/teams/${teamCopy.id}`}>
                            {teamCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/teams/${teamCopy.id}`}>
                            {teamCopy.city}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/teams/${teamCopy.id}`}>
                            {teamCopy.conference}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/teams/${teamCopy.id}`}>
                            {teamCopy.wins}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/teams/${teamCopy.id}`}>
                            {teamCopy.losses}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/teams/${teamCopy.id}/players`}>
                            Players
                        </Link>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default TeamEditorInline;