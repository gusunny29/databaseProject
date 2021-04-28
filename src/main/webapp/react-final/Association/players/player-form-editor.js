const PlayerFormEditor = () => {
    return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
                 <input className="form-control"/>
            <label>Position</label>
            <input
                className="form-control"
                value={teamCopy.city}
                onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, city: e.target.value}))}/>
            <label>Years Playing</label>
            <input
                className="form-control"
                value={teamCopy.city}
                onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, city: e.target.value}))}/>
            <label>First Name</label>
            <input
                className="form-control"
                value={teamCopy.city}
                onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, city: e.target.value}))}/>
            <label>Last Name</label>
            <input
                className="form-control"
                value={teamCopy.city}
                onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, city: e.target.value}))}/>
            <label>Username</label>
            <input
                className="form-control"
                value={teamCopy.city}
                onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, city: e.target.value}))}/>
            <label>Password</label>
            <input
                className="form-control"
                value={teamCopy.city}
                onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, city: e.target.value}))}/>
            <label>Email</label>
            <input
                className="form-control"
                value={teamCopy.city}
                onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, city: e.target.value}))}/>
            <label>Date of Birth</label>
                <input className="form-control"/>
            <br/>
            <button className="btn btn-warning">Cancel</button>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-success">Create</button>
        </div>
    )
}

export default PlayerFormEditor