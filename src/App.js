import React, { useEffect, useState } from "react"
import { gameSubject } from "src/Components/Game"
import Board from "src/Components/Board"
import styled from "styled-components"

const App = () => {
  const [board, setBoard] = useState([])

  useEffect(() => {
    const subscribe = gameSubject.subscribe((game) => setBoard(game.board))

    return () => subscribe.unsubscribe()
  }, [])

  return (
    <Root>
      <BoardContainer>
        <Board board={board} />
      </BoardContainer>
    </Root>
  )
}

export default App

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(34, 34, 34);
`
const BoardContainer = styled.div`
  width: 600px;
  height: 600px;
`
