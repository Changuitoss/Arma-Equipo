import React from 'react';

function PlayerList(props) {
    const list = props.list;
    const names = list.map((name) =>  <li key={name}>
                                        {name}
                                        <button onClick={props.addTeam} name={name} teamname="teamA">a</button>
                                        <button onClick={props.addTeam} name={name} teamname="teamB">b</button>
                                        <button name={name} onClick={props.removeFromList}>x</button>
                                      </li>
                          )

    return (
      <div>
        <h3>Jugadores</h3>
        <ul>
          {names}
        </ul>
      </div>

    )
}

export default PlayerList;