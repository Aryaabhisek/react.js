import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
      <div className='Card'>
        <img src={props.img}/>
        <h1>{props.user},{props.age}</h1>
        <p>Full Stack Devloper</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
