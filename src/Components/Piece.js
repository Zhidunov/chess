import React from "react"
import { useDrag, DragPreviewImage } from "react-dnd"
import styled from "styled-components"

const Piece = ({ piece: { type, color }, position }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "piece",
    item: { type: "piece", id: `${position}_${type}_${color}` },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  })
  const pieceImg = `assets/${type}_${color}.png`
  return (
    <>
      <DragPreviewImage connect={preview} src={pieceImg} />
      <Root ref={drag} isDragging={isDragging}>
        <StyledImg src={pieceImg} alt={type} />
      </Root>
    </>
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
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
`
const StyledImg = styled.img`
  max-width: 70%;
  max-height: 70%;
`
