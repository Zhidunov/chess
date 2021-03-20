import React from "react"
import styled from "styled-components"
import Square from "src/Components/Square"
import Piece from "src/Components/Piece"
import { useDrop } from "react-dnd"
import { move } from "src/Components/Game"

const BoardSquare = ({ piece, black, position }) => {
  const [, drop] = useDrop({
    accept: "piece",
    drop: (item) => {
      const [fromPosition] = item.id.split("_")
      move(fromPosition, position)
    },
  })
  return (
    <Root ref={drop}>
      <Square black={black}>
        {piece && <Piece piece={piece} position={position} />}
      </Square>
    </Root>
  )
}

export default BoardSquare

const Root = styled.div`
  width: 100%;
  height: 100%;
`
