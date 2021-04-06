import React from 'react'
import Burger from './Burger'
import Menu from './Menu'

export default function MainComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <Burger />
        </div>
        <div className="col-5">
          <Menu />
        </div>
      </div>

    </div>
  )
}
