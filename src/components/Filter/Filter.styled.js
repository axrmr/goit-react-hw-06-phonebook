import { styled } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  .close {
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
    &:hover {
      fill: red;
    }
  }
`

export const Input = styled.input`
  max-width: 360px;
  width: 100%;
  font-size: 1.2rem;
  padding: 10px 35px 10px 15px;
  border: 1px solid;
  border-radius: 6px;
  &:placeholder-shown {
    font-size: 1.2rem;
  }
`

export default Input
