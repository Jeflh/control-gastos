import React from 'react'

const Charge = ({ concept, value }) => {
  return (
    <li>
      <div className='flex flex-col text-xl font-medium'>
        <p className='grid grid-cols-2'> 
          <span className='text-gray-950'> Nesflis{concept}</span>
          <span className='text-rose-600 text-right'> -${value}249</span>
        </p>
        <p className='grid grid-cols-2'> 
        <span className='text-gray-950'> Komida{concept}</span>
        <span className='text-rose-600 text-right'> -${value}577</span>
        </p>
        <p className='grid grid-cols-2'>
          <span className='text-gray-950'> Nose{concept}</span>
          <span className='text-rose-600 text-right'> -${value}749</span>
        </p>
        <p className='grid grid-cols-2'>
          <span className='text-gray-950'> asdfsadfasdfasdfasdf{concept}</span>
          <span className='text-rose-600 text-right'> -${value}29</span>
        </p>
      </div>
    </li>
  )
}

export default Charge