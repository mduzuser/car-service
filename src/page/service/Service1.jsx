import React from 'react'
import { Service1A, Service1B, Service1C } from '../../source/import/import'

function Service1() {
  return (
    <>
       <div className="container">
          <div className="service1">
            <Service1A/>
            <Service1B/>
            <Service1C/>
          </div>
       </div>
    </>
  )
}

export default Service1