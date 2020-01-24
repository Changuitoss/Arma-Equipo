import React from 'react';


const Jugadores = (props) => {
  var lista = props.lista;
  return (
    <div className="lista-jugadores">
    <p>Jugadores</p>
    <ul>
      {lista.map(jugador => <li key={jugador + Date.now()}>
                              {jugador} 
                              <button className="equipo1">a</button>
                              <button className="equipo2">b</button>
                              <button className="equipo2">X</button>
                            </li>)}
    </ul>
  </div>
  );
}

export default Jugadores;