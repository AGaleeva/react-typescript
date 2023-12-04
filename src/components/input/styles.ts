import styled from "styled-components";


export const InputComponent = styled.input`  
  width: fit-content;
  height: fit-content;
  padding: 6px 10px;
  outline: none;
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.59);
  background-color: ${({disabled}) => disabled ? 'grey' : 'white'};    
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`;