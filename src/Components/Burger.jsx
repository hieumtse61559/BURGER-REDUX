import React from 'react'
import Salad from './Salad'
import Cheese from "./Cheese";
import Beef from './Beef';

export default function Burger() {
  return (
    <div>
      <div className="breadTop"></div>
      <Cheese/>
      <Salad />
      <Beef/>
      <div className="breadBottom"></div>
    </div>
  )
}
