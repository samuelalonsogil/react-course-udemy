import { useState } from "react"

export default function Player( {name, symbol} ) {
    
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing( (editing)=> !editing );
    }

    function handleChange( event ){
        setPlayerName(event.target.value)
    }

    let playerNameInput = <span className="player-name"> {playerName} </span>;
    if(isEditing){
        playerNameInput = <input onChange={handleChange} type="text" placeholder="introduce player name" value={playerName} required/>
    }
    
  
    return (
    <>
      <li>
        <span className="player">
          { playerNameInput }
          <span className="player-symbol"> {symbol} </span>
        </span>
        <button onClick={handleClick}> {isEditing ? 'Save' : 'Edit'} </button>
      </li>
    </>
  );
}
