import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// let scrolled = false;
// window.addEventListener('scroll', function(e) {
//   console.log('scrolled');
//   scrolled = true;
// });