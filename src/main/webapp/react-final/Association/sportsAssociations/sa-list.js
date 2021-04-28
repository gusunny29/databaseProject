import SAEditorInline from "./sa-editor-inline";
import SAService from "./sa-service"

const SA_URL = "http://localhost:8080/api/sportsAssociations"
const { useState, useEffect } = React;

const SaList = () => {
    const [sas, setSAs] = useState([])
    const [newSA, setNewSA] = useState({})
    useEffect(() => {
        findAllSAs()
    }, [])
    const createSA = (sa) =>
        SAService.createSA(sa)
            .then(sa => {
                setNewSA({sport:''})
                setSAs(sas => ([...sas, sa]))
            })
    const updateSA = (id, newSA) =>
        SAService.updateSA(id, newSA)
            .then(sa => setSAs(sas => (sas.map(sa => sa.id === id ? newSA : sa))))
    const findAllSAs = () =>
        SAService.findAllSAs()
            .then(sas => setSAs(sas))
    const deleteSA = (id) =>
        SAService.deleteSA(id)
            .then(sas => setSAs(sas => sas.filter(sa => sa.id !== id)))
    return(
        <div>
            <h2>Sports Associations</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Sports Association Title"
                                   sport="Please enter a sport for the association" className="form-control" value={newSA.sport}
                                   onChange={(e) => setNewSA(newSA => ({...newSA, sport: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createSA(newSA)}></i>
                        </div>
                    </div>
                </li>
            {
                sas.map(sa =>
                    <li key={sa.id} className="list-group-item">
                        <SAEditorInline key={sa._id}
                            updateSA={updateSA}
                            deleteSA={deleteSA}
                            sa={sa}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default SaList;