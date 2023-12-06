import styled from "styled-components";
import { colors } from "styles/colors";

export const Homework24Wrapper = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  justify-content: center;
  padding: 70px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: ${colors.primary}; 
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  width: 500px;
  height: 300px;
  padding: 50px;
  border-radius: 5px;
  background-color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Text = styled.p`
  color: black;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const TextHeader = styled.p`
  color: black;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  min-width: fit-content;
  width: 200px;
`;