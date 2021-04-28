const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const SaEditorInline = ({sa, deleteSA, updateSA}) => {
    const [saCopy, setSACopy] = useState(sa)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={saCopy.sport}
                            onChange={(e)=>setSACopy(saCopy => ({...saCopy, sport: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/sportsAssociations/${saCopy.id}/teams`}>
                            Teams
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateSA(saCopy.id, saCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteSA(sa.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/sportsAssociations/${saCopy.id}`}>
                            {saCopy.sport}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/sportsAssociations/${saCopy.id}/teams`}>
                            Teams
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default SaEditorInline;