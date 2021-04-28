const { useState, useEffect } = React;

const Player = ({player, deletePlayer, updatePlayer}) => {
    const [playerCopy, setPlayerCopy] = useState(player)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                    <div>
                        <input value={playerCopy.firstName} onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, firstName: e.target.value}))}/>
                        <input value={playerCopy.lastName} onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, lastName: e.target.value}))}/>
                        <button onClick={() => deletePlayer(player._id)}>Delete</button>
                        <button onClick={() => {
                            setEditing(false)
                            updatePlayer(playerCopy._id, playerCopy)
                        }}>Save</button>
                    </div>
            }
            {
                !editing &&
                    <div>
                        {playerCopy.firstName}
                        {playerCopy.lastName}
                        <button onClick={() => setEditing(true)}>Edit</button>
                    </div>
            }
        </div>
    )
}

export default Player;