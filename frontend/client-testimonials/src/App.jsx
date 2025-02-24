import React from 'react'
import Testimonialcard from './components/testimonials'

const App = () => {
  return (
    <div className='App'>
      <h1>Client Testimonials</h1>
      <Testimonialcard
         name='emily watson'
         review='this service was amazing ! Highly recommended'
      />

      <Testimonialcard
         name="john"
         review="iam a good boy"
      />


    </div>
  )
}

export default App
