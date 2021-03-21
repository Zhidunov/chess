import React, { useEffect, useState } from "react"
import { gameSubject, initGame, resetGame } from "src/Components/Game"
import Board from "src/Components/Board"
import styled from "styled-components"

const App = () => {
  const [board, setBoard] = useState([])
  const [isGameOver, setIsGameOver] = useState()
  const [result, setResult] = useState()

  useEffect(() => {
    initGame()
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board)
      setIsGameOver(game.isGameOver)
      setResult(game.result)
    })

    return () => subscribe.unsubscribe()
  }, [])

  return (
    <Root>
      {isGameOver && (
        <GameOverText>
          Game Over
          <NewGameButton
            onClick={() => {
              resetGame()
            }}
          >
            <VerticalText>NEW GAME</VerticalText>
          </NewGameButton>
        </GameOverText>
      )}
      <BoardContainer>
        <Board board={board} />
      </BoardContainer>
      {result && <VerticalText>{result}</VerticalText>}
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
const GameOverText = styled.h2`
  text-orientation: upright;
  writing-mode: vertical-lr;
  font-family: sans-serif;
  padding: 10px;
  color: white;
`
const VerticalText = styled.span`
  text-orientation: upright;
  writing-mode: vertical-lr;
  font-family: sans-serif;
  padding: 10px;
  color: white;
`
const NewGameButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: rgb(63, 63, 63);
  border: 2px solid white;
  border-radius: 10px;
  outline: none;
`
