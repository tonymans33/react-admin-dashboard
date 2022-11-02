import React from 'react'

function Button({ bgColor, color, size, text, borderRadius }) {
  return (
    <button type='button' className={`text-${size} p-3 transition duration-900 font-semibold`} style={{ backgroundColor: bgColor, color, borderRadius }}>
      {text}
    </button>
  )
}

export default Button