import React from 'react'

const Button = ({
    label="",
    className=""
}) => {
  return (
    <button className={`bg-blue-500 w-24 hover:bg-blue-700 text-white font-bold py-2 rounded ${className}`}>{label}</button>
  )
}

export default Button