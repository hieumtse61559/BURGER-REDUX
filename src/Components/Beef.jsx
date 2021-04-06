import React from 'react'
import { useSelector } from 'react-redux'
import { v4  } from 'uuid';

export default function Beef() {
  const numberBeef = useSelector(state => state.ComponentReducer.burger.beef);
  const beefRender = () => {
    const beefList = []
    for (var i = 0; i < numberBeef; i++) {
      beefList.push(
        <div key={v4()} className="beef">
        </div>
      )
    }                
    return beefList
  }                
  return (
    <div className="container">
      {beefRender().map(beef =>{
        return beef
      })}
    </div>
  )
}