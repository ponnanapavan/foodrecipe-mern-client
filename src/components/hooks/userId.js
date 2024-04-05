import React from 'react'

const userId = () => {
  return  window.localStorage.getItem("userId");
  
}

export default userId
