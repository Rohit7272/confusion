import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Menu from './components/menuComponents';
import { Media } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <h1 className='h1' > <b> Fresh Food ! </b> </h1>
    <Menu/>
     </div>
    
  );
}

export default App;
