import React from 'react'
import Burger from './Burger'
import Menu from './Menu'

export default function MainComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Burger />
        </div>
        <div className="col-4">
          <div className="bg-warning" style={{height: 350}}>
          <Menu  />
          </div>
          
        </div>
      </div>

    </div>
  )
}
