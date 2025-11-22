import React, { useState } from 'react'

const App = () => {
    const [num, setNum] = useState(10)
    const [username, setUsername] = useState('Arya')
    const [array, setArray] = useState([10,20,30,10,210,4])
    
    function changeNum(){
        setNum(30)
        setUsername('Bapun')
        setArray([20,25,45])
    }
    
    return (
        <div>
            <h1>
                Value of num is: {num} <br /> The array is :{array} <br />The name is: {username}
            </h1>
            <button onClick={changeNum}>Click</button>
        </div>
    )
}

export default App