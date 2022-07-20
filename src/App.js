//import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Menu from './components/menuComponents';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {DISH} from './shared/dishes';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          dishes: DISH
      }                         
  }

render() {
  return(
    <div>

      <div>
      <h1 class="h1" ><b>GOOD FOOD</b></h1>
      </div>

      <div>
        <Menu dishes={this.state.dishes}/>
      </div>

    </div>
  )
}
}

export default App;
