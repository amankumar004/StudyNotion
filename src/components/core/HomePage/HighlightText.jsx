import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold bg-custom-gradient bg-clip-text text-transparent'>
        {text}
    </span>
  )
}

export default HighlightText