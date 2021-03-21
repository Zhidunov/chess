import React from "react"
import Square from "src/Components/Square"
import { move } from "src/Components/Game"
import styled from "styled-components"

const promotionPieces = ["r", "n", "b", "q"]

const Promote = ({ promotion: { from, to, color } }) => {
  return (
    <Root>
      {promotionPieces.map((p, i) => (
        <PromoreSquare key={i}>
          <Square black={i % 3 === 0}>
            <PieceContainer onClick={() => move(from, to, p)}>
              <StyledImg src={`assets/${p}_${color}.png`} alt="" />
            </PieceContainer>
          </Square>
        </PromoreSquare>
      ))}
    </Root>
  )
}

export default Promote

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`

const PromoreSquare = styled.div`
  width: 50%;
  height: 50%;
`

const PieceContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
`
const StyledImg = styled.img`
  max-width: 70%;
  max-height: 70%;
`
