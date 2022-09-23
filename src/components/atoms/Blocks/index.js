import React from 'react'
import { DinamicContainer } from './style'

const Block = ({width, children}) => {
  return (
    <DinamicContainer width={width}>
        {children}
    </DinamicContainer>
  )
}

export default Block
