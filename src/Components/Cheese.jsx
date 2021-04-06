import React from 'react'
import { useSelector } from 'react-redux'
import { v4  } from 'uuid';

export default function Cheese() {
  const numberCheese = useSelector(state => state.ComponentReducer.burger.cheese);
  const cheeseRender = () => {
    const cheeseList = []
    for (var i = 0; i < numberCheese; i++) {
      cheeseList.push(
        <div key={v4()} className="cheese">
        </div>
      )
    }                
    return cheeseList
  }
  return (
    <div className="container">
      {cheeseRender().map(cheese =>{
        return cheese
      })}
    </div>
  )
}