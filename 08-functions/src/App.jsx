import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("button clicked!");
    
  }
  function inputChanging(){
    console.log("User is typing...");
    
  }

  return (
    <div>
      <h1>Hello, I am Arya</h1>
      <button onClick={btnClicked}>Change User</button>

      <input onChange={function(elem){
        console.log(elem.target.value);
        
      }} 
      type='text' placeholder='Enter Name' />
    </div>
  )
}

export default App
