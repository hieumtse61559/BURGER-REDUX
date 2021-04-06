import React from 'react'
import { useSelector } from 'react-redux'
import { v4  } from 'uuid';

export default function Salad() {
  const numberSalad = useSelector(state => state.ComponentReducer.burger.salad);
  const saladRender = () => {
    const saladList = []
    for (var i = 0; i < numberSalad; i++) {
      saladList.push(
        <div key={v4()} className="salad">
        </div>
      )
    }
    return saladList
  }
  return (
    <div className="container">
      {saladRender().map(salad =>{
        return salad
      })}
    </div>
  )
}
