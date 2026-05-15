import React from 'react'
import { useParams } from 'react-router-dom';

function User() {

console.log(useParams().id);


const userId = useParams().id;


  return (
    <div>User {userId}</div>
  )
}

export default User