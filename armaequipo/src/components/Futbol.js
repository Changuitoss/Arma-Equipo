import React from 'react';
import { Component } from 'react';
import Equipos from './Equipos';
import Jugadores from './Jugadores';
import jugadoresX from '../samplejugadores';
 
class Futbol extends Component {

  state = {
    lista: [],
    equipoA: [],
    equipoB: []
  }

  myInput = React.createRef();

  agregaJugador = (e) => {
    e.preventDefault();
    let lista = [...this.state.lista]
    
    const nombreJugador = this.myInput.current.value;

    if (nombreJugador.length > 0) {
      lista.push(nombreJugador);
    }

    this.setState({ lista });
    e.currentTarget.reset();
  }

  render() {
    return (
      <div className="futbol-container">
        <h1 className="titulo-deporte">Futbol</h1>
        <form className="cant-jugadores">
          <label>Cantidad de jugadores por equipo: </label>
          <input type="text"/>
          <button type="submit">-></button>
        </form>      

        <form className="nombre-jugadores" onSubmit={this.agregaJugador}>
          <label>Ingresar jugador: </label>
          <input type="text" ref={this.myInput}/>
          <button type="submit">-></button>
        </form>

        <Jugadores lista={this.state.lista}/>
        <Equipos />
        <Equipos />
      </div>
    );
  } 
}

export default Futbol;