
import SAService from "./sa-service"

const SA_URL = "http://localhost:8080/api/sportsAssociations"
const {Link} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const SaList = () => {
    const [sas, setSAs] = useState([])
    const [newSA, setNewSA] = useState([])

    useEffect(() => {
        findAllSAs()
    }, [])
    const createSA = (sa) =>
        SAService.createSA(sa)
            .then(sa => {
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
                {
                    sas.map(sa =>
                        <li key={sa.id} className="list-group-item">
                            <Link to ={`/sportsAssociations/${sa.id}`}>
                                {`${sa.sport}`}
                            </Link>
                        </li>)
                }
                <li>
                    <Link to ={'/sportsAssociations/create'}>
                        <button className='create-btn btn btn-primary'>
                            Add Sports Association
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SaList;