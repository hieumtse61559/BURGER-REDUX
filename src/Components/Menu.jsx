import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'

export default function Menu() {
  const dispatch = useDispatch();
  const handleIncreaseSalad= ()=>{
    const action = {
      type: "SALAD_INCREASE",
    }
    dispatch(action)
  }

  const handleDecreaseSalad= ()=>{
    const action = {
      type: "SALAD_DECREASE",
    }
    dispatch(action)
  }

  const handleIncreaseCheese= ()=>{
    const action = {
      type: "CHEESE_INCREASE",
    }
    dispatch(action)
  }

  const handleDecreaseCheese= ()=>{
    const action = {
      type: "CHEESE_DECREASE",
    }
    dispatch(action)
  }

  const handleIncreaseBeef= ()=>{
    const action = {
      type: "BEEF_INCREASE",
    }
    dispatch(action)
  }

  const handleDecreaseBeef= ()=>{
    const action = {
      type: "BEEF_DECREASE",
    }
    dispatch(action)
  }

  

  


  const numberSalad = useSelector(state => state.ComponentReducer.burger.salad);
  const numberCheese = useSelector(state => state.ComponentReducer.burger.cheese);
  const numberBeef = useSelector(state => state.ComponentReducer.burger.beef);


  const total = useSelector(state => state.ComponentReducer.total);

  

  return (
    <div className="container">
      <h2>Menu</h2>
      <ListGroup>
        <ListGroupItem className="d-flex justify-content-between align-items-center" color="primary">
          <div className="title">SALAD</div>
          <div className="content">
          <Button color="success" disabled={!numberSalad} onClick={handleDecreaseSalad}>-</Button>
          <span className="mx-2">{numberSalad}</span>
          <Button color="success" onClick={handleIncreaseSalad}>+</Button>
          </div>
        </ListGroupItem>

        <ListGroupItem className="d-flex justify-content-between align-items-center" color="primary">
          <div className="title">Cheese</div>
          <div className="content">
          <Button color="success" disabled={!numberCheese} onClick={handleDecreaseCheese}>-</Button>
          <span className="mx-2">{numberCheese}</span>
          <Button color="success" onClick={handleIncreaseCheese}>+</Button>
          </div>
        </ListGroupItem>

        <ListGroupItem className="d-flex justify-content-between align-items-center" color="primary">
          <div className="title">Beef</div>
          <div className="content">
          <Button color="success" disabled={!numberBeef} onClick={handleDecreaseBeef}>-</Button>
          <span className="mx-2">{numberBeef}</span>
          <Button color="success" onClick={handleIncreaseBeef}>+</Button>
          </div>
        </ListGroupItem>


        <ListGroupItem className="d-flex justify-content-between align-items-center" color="primary">
          <div className="title">Total:</div>
          <span>{total}</span>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
