import React from 'react';
import ReactDOM from 'react-dom';
// import dotenv from 'dotenv';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import dotenv from 'dotenv';
dotenv.config()

// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// dotenv.config()


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
