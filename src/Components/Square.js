import React from "react"
import styled from "styled-components"

const Square = ({ children, black }) => {
  return <Root black={black}>{children}</Root>
}

export default Square

const Root = styled.div`
  width: 100%;
  height: 100%;
  ${({ black }) => {
    return black ? "background-color: #B59963;" : "background-color: #F0D9B5;"
  }};
`
