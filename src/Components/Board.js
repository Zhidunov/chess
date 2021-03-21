import React, { useEffect, useState } from "react"
import styled from "styled-components"
import BoardSquare from "src/Components/BoardSquare"

const Board = ({ board, turn }) => {
  const [currentBoard, setCurrentBoard] = useState([])

  useEffect(() => {
    setCurrentBoard(turn === "w" ? board.flat() : board.flat().reverse())
  }, [board, turn])

  const getXYPosition = (i) => {
    const x = turn === "w" ? i % 8 : Math.abs((i % 8) - 7)
    const y = turn === "w" ? Math.abs(Math.floor(i / 8) - 7) : Math.floor(i / 8)
    return { x, y }
  }

  const isBlack = (i) => {
    const { x, y } = getXYPosition(i)
    return (x + y) % 2 === 1
  }

  const getPosition = (i) => {
    const { x, y } = getXYPosition(i)
    const letter = ["a", "b", "c", "d", "e", "f", "g", "h"][x]
    return `${letter}${y + 1}`
  }

  return (
    <Root>
      {currentBoard.flat().map((piece, index) => (
        <SquareContainer key={index}>
          <BoardSquare
            piece={piece}
            black={isBlack(index)}
            position={getPosition(index)}
          />
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
