import styled from "styled-components";
import { colors } from "styles/colors";

export const Lesson24Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 70px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: ${colors.primary};  
`;

export const Text = styled.p`
  color: black;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  height: 500px;
  padding: 10px;
  background-color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;