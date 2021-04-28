import saService from "./sa-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const SA_URL = "http://localhost:8080/api/sportsAssociations"

const SaEditorForm = () => {
    const [sa, setSA] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findSAById(id)
    }, []);
    const findSAById = (id) =>
        saService.findSAById(id)
            .then(sa => setSA(sa))
    const updateSA = (id, newSA) =>
        saService.updateSA(id, newSA)
            .then(() => history.goBack())
    const deleteSA = (id) =>
        saService.deleteSA(id)
            .then(() => history.goBack())
    
    return (
        <div>
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
                onClick={() => updateSA(sa.id, sa)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteSA(sa.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default SaEditorForm