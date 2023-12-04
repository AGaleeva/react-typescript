import styled from "styled-components";

interface ButtonComponentProps {
  $isRedFont?: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`  
  width: fit-content;
  height: fit-content;
  padding: 6px 10px;
  outline: none;
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.59);
  background-color: ${(props) => props.disabled ? 'grey' : 'blue'}; // = background-color: ${({disabled}) => disabled ? 'grey' : 'blue'}
  color: ${({$isRedFont}) => $isRedFont ? 'red' : 'white'};  
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`;