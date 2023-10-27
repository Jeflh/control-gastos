import { useState } from 'react'
import React from 'react'
import Charge from './Charge'

const Card = ({ name }) => {
  const [charges, setCharges] = useState([])

  return (
    <div className=' bg-white shadow-md rounded-xl mx-auto mt-3 mb-3 lg:w-3/12'> 
      <div className='mx-auto mt-2 mb-1'>
        <img
          className='w-full h-full'
          src="https://blog.kardmatch.com.mx/hs-fs/hubfs/tarjeta-de-credito-rappi-grande.png?width=359&name=tarjeta-de-credito-rappi-grande.png"
          alt="Tarjeta Rappi"
        />
      </div>
      <div className=''>
        <ul>
          {charges.map((charge, index) => ( 
            <Charge key={index} value={charge} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card