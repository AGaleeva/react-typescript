import styled from "styled-components";

import { colors } from 'styles/colors'

export const Homework22Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 100px;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
`;

export const LoginCard = styled.form`
  display: flex;  
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */  
  gap: 40px;
  padding: 40px;
  width: fit-content;
  height: fit-content;
  min-height: 470px;
  min-width: 470px;
  border-radius: 4px;
  background-color: #fff;
`;

export const LoginFormName = styled.p`
  color: rgb (123,54, 247);
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;