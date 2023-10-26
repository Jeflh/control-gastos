import { useState } from 'react'
import React from 'react'
import Charge from './Charge'

const Card = ({ name }) => {
  const [charges, setCharges] = useState([])

  return (
    <div className='m-5 bg-white shadow-md px-5 py-5 rounded-xl'>
      <h2 className='text-center text-rose-600 text-xl font-medium uppercase mb-3'>{name}</h2>
      <div className=''>
        <ul>
          <Charge />
          {charges.map((charge, index) => ( 
            <Charge key={index} value={charge} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card