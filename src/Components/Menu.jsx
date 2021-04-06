import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export default function Menu() {
  return (
    <div className="container">
      <h2>Menu</h2>
      <ListGroup>
        <ListGroupItem className="d-flex justify-content-between align-center" color="primary">
          <div className="title">SALAD</div>
          <div className="content">
          <Button color="success">-</Button>
          <span className="mx-2">0</span>
          <Button color="success">+</Button>
          </div>
          

        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
