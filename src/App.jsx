import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
function App() {

  return (
    <>
      <Header />

      <div className='flex flex-col justify-center  mt-5'>
        <Card className="" name={''}/>
        <Card className="" name={''}/>
      </div>
      
      <Footer />
    </>
  )
}

export default App
