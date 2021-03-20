import React from "react"
import styled from "styled-components"
import BoardSquare from "src/Components/BoardSquare"

const Board = ({ board }) => {
  const getXYPosition = (i) => {
    const x = i % 8
    const y = Math.abs(Math.floor(i / 8) - 7)
    return { x, y }
  }

  const isBlack = (i) => {
    const { x, y } = getXYPosition(i)
    return (x + y) % 2 === 1
  }

  return (
    <Root>
      {board.flat().map((piece, index) => (
        <SquareContainer key={index}>
          <BoardSquare piece={piece} black={isBlack(index)} />
        </SquareContainer>
      ))}
    </Root>
  )
}

export default Board

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`
const SquareContainer = styled.div`
  width: 12.5%;
  height: 12.5%;
`
