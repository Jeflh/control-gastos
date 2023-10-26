import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
function App() {

  return (
    <>
      <Header />

      <div className='mt-5 flex justify-center'>
        <Card name={'Rappi'}/>
      </div>
      
      <Footer />
    </>
  )
}

export default App
