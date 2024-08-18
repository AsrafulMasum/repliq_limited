import React from 'react'

function PrimaryButton({ text, style }) {
  return (
    <button className={`font-medium uppercase ${style}`}>
      {text}
    </button>
  )
}

export default PrimaryButton