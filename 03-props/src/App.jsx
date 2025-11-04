import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className='Parent'>
      <Card user='Arya' age={23} img="https://plus.unsplash.com/premium_photo-1760441770990-04d7cf3e9f6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=678"/>
      <Card user='Bapun' age={23} img="https://plus.unsplash.com/premium_photo-1676550898746-128ac69cfc48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"/>
      <Card user='SRK' age={58} img="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"/>
    </div>
  )
}

export default App
