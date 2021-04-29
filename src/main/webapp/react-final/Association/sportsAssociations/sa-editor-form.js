import saService from "./sa-service"

const {useState, useEffect} = React
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const SA_URL = "http://localhost:8080/api/sportsAssociations"

const SaEditorForm = () => {
    const [sa, setSA] = useState({})
    const [saCopy, setSACopy] = useState({})
    const {saId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findSAById(saId)
    }, []);
    const findSAById = (id) =>
        saService.findSAById(id)
            .then(sa => {
                setSA(sa)
                setSACopy(sa);
            })
    const updateSA = (id, newSA) =>
        saService.updateSA(id, newSA)
            .then(() => history.goBack())
    const deleteSA = (id) =>
        saService.deleteSA(id)
            .then(() => history.goBack())
    const createSA = (sa) =>
        saService.createSA(sa)
            .then(() => history.goBack())
    
    return (
        <div>
            <div>
                <Link to={'/'}>
                    Home
                </Link>
            </div>
            <h2>
                SportsAssociation Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={sa.id}/>
            <label>Sport</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setSA(sa => ({...sa, sport: e.target.value}))}
                value={sa.sport}/>

            <button
                onClick={saCopy.sport ? () => updateSA(sa.id, sa) : () => createSA(sa)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteSA(sa.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>

            <br/>
            <br/>
            <div>
                {
                    saCopy.sport &&
                    <Link to={`/sportsAssociations/${sa.id}/teams`}>
                        Click here to view the teams of this association.
                    </Link>
                }
            </div>

        </div>
    )
}

export default SaEditorForm