import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => {
  return (
      < Provider store = {store}>
      
          <HashRouter> 
              <App />
          </HashRouter> 
      </ Provider>
  )
  
  
};

// class Root extends React.Component {

//   render() {

//     return (
//       < Provider store={store}>

//       < App />
//     
//     )
//   }
// }

export default Root;