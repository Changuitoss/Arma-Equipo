import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Futbol from './components/Futbol';

ReactDOM.render(<Futbol />, document.getElementById('root'));

serviceWorker.unregister();
