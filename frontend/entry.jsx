import React from 'react';
import ReactDOM from 'react-dom';

// import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // ReactDOM.render(<Root store={store} />, root);
    ReactDOM.render(
        <div>
    <h1>Hello Internet!</h1>
    <h4>Hello World</h4>
        </div>
    , root);
});
