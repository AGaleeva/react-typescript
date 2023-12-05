import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: black;
`;

export const InputComponent = styled.input`  
  width: 100%;
  height: 50px;
  padding: 6px 10px;
  outline: none;  
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.59);
  background-color: ${({disabled}) => disabled ? 'lightgrey' : 'white'};    
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'default'};    
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;