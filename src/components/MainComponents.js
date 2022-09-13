import React, { Component } from "react";
import Menu from "./menuComponents";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer  from "./FooterComponent";
import Home from './HomeComponent';
import Contact from "./ContactComponent";
import {Switch, Route, Redirect} from 'react-router-dom';
import DishDetail from "./DishdetailComponent";
import About from "./AboutComponent";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions:PROMOTIONS,
      comments:COMMENTS,
      selectedDish: null
    };
  }
  onSelectDish(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }
  render() {
    const HomePage =()=>{
      return <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
    }
    const DishWithId=({match})=>{
      return (
        <DishDetail 
        dish={this.state.dishes.filter((dish,index)=>
        dish.id===parseInt(match.params.id, 10))[0]}
        comments={this.state.comments.filter((comment,index)=>
          comment.dishId===parseInt(match.params.id,10))}/>
          )
    }
    return (
      <div className="App">
        <Header/>
        

         <Switch>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
        <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders} />} />*/
        <Route exact path="/menu/:id" component={DishWithId} />
        <Route exact path="/contact" component={Contact}/>
    <Redirect to="/home" /> 
        </Switch> 

        <Footer/>
      </div>
    );
  }
}
export default Main;