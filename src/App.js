import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { store } from './Redux/configureStore';
import {Provider} from 'react-redux'
import Main from './Components/Main/Main';

function App() {
  return (
    //Wrapping Main in both REDUX Store and Browser-Router
    <Provider store={store}>
      <Router>
        <Main/>
      </Router>
    </Provider>
  );
}

export default App;
