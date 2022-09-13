import { Card,CardBody, CardTitle, CardText } from 'reactstrap';
import React from 'react';
import Menu from './menuComponents';

const DishDetail=({dish})=> {
        if (dish != null) {
        return (<Card>
        <img
          alt={dish.name}
          src={dish.image}
        />
        <CardBody>
          <CardTitle tag="h5">
          {dish.name}
          </CardTitle>
          <CardText>
          {dish.description}
          </CardText>
        </CardBody>
      </Card>)}
      else {
        return <div></div>
      }
    
}


  



export default DishDetail;