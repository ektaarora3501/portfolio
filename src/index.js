import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<Sidebar />, document.getElementById('root'));


serviceWorker.register();
