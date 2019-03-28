import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Aplicacion from './componentes/Aplicacion';
import * as serviceWorker from './serviceWorker';



//App = que va a imprimir
//root = donde (index.html)
ReactDOM.render( <Aplicacion />, document.getElementById('root'));
serviceWorker.unregister();
