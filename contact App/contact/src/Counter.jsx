import React from 'react'

const Counter = ({count, click, mouse}) => {
  return (
    <div>
    <p>Count: {count}</p>
      <button onClick={click} onMouseOver={mouse}>
        Increase Count
      </button>
    </div>
  )
}

export default Counter