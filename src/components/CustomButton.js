import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const CustomButton = ({ children, ...otherProps }) => (
  <Button {...otherProps}>{children}</Button>
)
