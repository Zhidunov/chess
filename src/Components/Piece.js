import React from "react"
import styled from "styled-components"

const Piece = ({ piece: { type, color } }) => {
  const pieceImg = `assets/${type}_${color}.png`
  return (
    <Root>
      <StyledImg src={pieceImg} alt={type} />
    </Root>
  )
}

export default Piece

const Root = styled.div`
  cursor: grab;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
`
const StyledImg = styled.img`
  max-width: 70%;
  max-height: 70%;
`
