import React from 'react'
import Card from './components/Card.jsx'
import User from './components/User.jsx'
const App = () => {

  const arr = [1,2,3]

  return (
    <div className='Parent'>
      
    {/* <Card/>
    <Card/>
    <Card/> */}

    {/* <User name='Arya'/>
    <User name='Bapun'/> */}

  {arr.map(function(elem){
    return <Card />
  })}
    </div>
  )
}

export default App
