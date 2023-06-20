import { styled } from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    max-width: 400px;
    width: 100%;
    padding: 10px;
    font-size: 1.2rem;
    border: 1px solid;
    border-radius: 6px;
    &:placeholder-shown {
      font-size: 1.2rem;
    }
  }
`;

export default Form;
