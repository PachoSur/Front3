import React from 'react'

const UserCard = (props) => {
  return (
    <div className="user-card">
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  )
}

export default UserCard