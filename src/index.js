import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form label={['checkbox1', 'checkbox2', 'checkbox3']}/>, document.getElementById('root'));
registerServiceWorker();
