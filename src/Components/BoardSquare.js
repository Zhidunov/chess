import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Square from "src/Components/Square"
import Piece from "src/Components/Piece"
import { useDrop } from "react-dnd"
import { handleMove, gameSubject } from "src/Components/Game"
import Promote from "src/Components/Promote"

const BoardSquare = ({ piece, black, position }) => {
  const [promotion, setPromotion] = useState(null)
  const [, drop] = useDrop({
    accept: "piece",
    drop: (item) => {
      const [fromPosition] = item.id.split("_")
      handleMove(fromPosition, position)
    },
  })

  useEffect(() => {
    const subscribe = gameSubject.subscribe(({ pendingPromotion }) =>
      pendingPromotion && pendingPromotion.to === position
        ? setPromotion(pendingPromotion)
        : setPromotion(null)
    )
    return () => subscribe.unsubscribe()
  }, [])
  return (
    <Root ref={drop}>
      <Square black={black}>
        {promotion ? (
          <Promote promotion={promotion} />
        ) : piece ? (
          <Piece piece={piece} position={position} />
        ) : null}
      </Square>
    </Root>
  )
}

export default BoardSquare

const Root = styled.div`
  width: 100%;
  height: 100%;
`
