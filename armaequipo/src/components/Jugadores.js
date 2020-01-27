import React, { Component } from 'react';


class Jugadores extends Component {

  render() {
    const lista = this.props.lista;
    const addJugadorEquipo = this.props.addJugadorEquipo;

    return (
      <div className="lista-jugadores">
        <p>Jugadores</p>
        <ul>
          {lista.map(jugador => <li key={jugador + Date.now()}>
                                  {jugador} 
                                  <button 
                                    className="equipoA" 
                                    nombre={jugador}
                                    onClick={addJugadorEquipo}>
                                      a
                                  </button>
                                  <button 
                                    className="equipoB" 
                                    nombre={jugador}
                                    onClick={addJugadorEquipo}>
                                      b
                                  </button>
                                  <button className="borrar">
                                    X
                                  </button>
                                </li>)}
        </ul>
      </div>
    );
  }
}

export default Jugadores;