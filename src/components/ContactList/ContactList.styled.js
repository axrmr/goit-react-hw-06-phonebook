import { styled } from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 30px 0 0 20px;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 40px;
    padding-left: 15px 10px;
    font-size: 1.3rem;
    text-align: center;
    cursor: pointer;
    border: 1px solid lightgray;
    border-radius: 10px;
    transition: transform 0.15s linear, border-color 0.15s linear;
    &:hover {
      transform: scale(1.02);
      box-shadow: 1px 1px 6px #00d8ff;
      border-color: transparent;
    }
    &:hover button {
      opacity: 1;
    }

    span {
      padding-left: 20px;
    }

    button {
      display: flex;
      justify-content: flex-end;
      padding-right: 5px;
      font-size: 0;
      color: red;
      background-color: transparent;
      opacity: 0;
      &:hover {
        background-color: transparent;
        border: 0;
        border-color: transparent;
      }
    }
  }
`

export default List
