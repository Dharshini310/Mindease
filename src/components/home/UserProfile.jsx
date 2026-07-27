import React, { useEffect, useState } from 'react'

function UserProfile() {
  const [name,setName] = useState("")
    useEffect(()=>{
      const storedName = localStorage.getItem("userName")
      if (storedName){
        setName(storedName)
      }
    })
  return (
    <div>{name}</div>
  )
}

export default UserProfile