import React from 'react';

function PlayerList(props) {
    const list = props.list;
    const names = list.map((name) =>  <li key={name.toString()}>
                                        {name}
                                        <button onClick={(e) => props.addTeamA(name, e)}>a</button>
                                        <button>b</button>
                                        <button>x</button>
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