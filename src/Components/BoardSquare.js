import React from "react"
import styled from "styled-components"
import Square from "src/Components/Square"
import Piece from "src/Components/Piece"

const BoardSquare = ({ piece, black }) => {
  return (
    <Root>
      <Square black={black}>{piece && <Piece piece={piece} />}</Square>
    </Root>
  )
}

export default BoardSquare

const Root = styled.div`
  width: 100%;
  height: 100%;
`
