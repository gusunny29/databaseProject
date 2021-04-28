const {Link} = window.ReactRouterDOM;

const PlayerList = () => {
    return(
        <div>
            <h2>Player List</h2>
            <button className="btn btn-primary">
                Add Player
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/users/123">
                        Thomas Sowell
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/users/123">
                        Cathie Wood
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/users/123">
                        Adam Smith
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default PlayerList;