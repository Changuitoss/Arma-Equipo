import React from 'react';

function PlayerList(props) {
    const list = props.list;
    const names = list.map((name) =>  <li key={name}>
                                        {name}
                                        <button onClick={props.addTeam} name={name} teamname="a">a</button>
                                        <button onClick={props.addTeam} name={name} teamname="b">b</button>
                                        <button name={name}>x</button>
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