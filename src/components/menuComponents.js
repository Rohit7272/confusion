import React from 'react';
import { Link } from "react-router-dom";
import { CardBody,CardText,Media,Card,CardImg,CardImgOverlay, CardTitle, Col, ListGroup, ListGroupItem, Row, Button} from 'reactstrap';
import DishDetail from './DishdetailComponent'



const Menu=(props)=>{

   const menu=(props)=>{return(
    <Row>
    {props.dishes.map((item,index)=>{
      return (
        
        <Col key={index} onClick={() => props.onClick(item)}  md='5' sm="12" xs="12">
  <Card inverse>
    <CardImg
      alt={item.name}
      src={item.image}
      style={{
        height: 310
        
      }}
      width=""
    />
    <CardImgOverlay>
      <CardTitle tag="h5" style={{color : "black"}}>
      {item.name}
      
      </CardTitle>
    </CardImgOverlay>
    
  </Card>
</Col>)
}        
)}
</Row>)}
    const  renderComments=(dish)=>{
      if (dish != null) {
        return (
          <Col md='5' sm="12" xs="12">
      <h4>Comments</h4>
      
      </Col>)}
      else {
        return <div></div>
      }
    }

    



  return (
    
    <div className="container">
      <div className="row">
      <Media list>
        {menu(props)}
      </Media>
      </div>
    <div className='row'>
    <Row>
      <Col md='5' sm="12" xs="12">
        <DishDetail dish={props.selectedDish}/>
      </Col>
      <Col md='1'></Col>

        {renderComments(props.selectedDish)}

    </Row>
    
         </div>
         </div>
  )
}



export default Menu;