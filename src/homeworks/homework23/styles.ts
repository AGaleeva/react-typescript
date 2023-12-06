import styled from "styled-components";

import { colors } from "styles/colors";

export const Homework23Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 400px;
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

export const PersonCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: 400px;
  height: fit-content;
  width: fit-content;
  border-radius: 4px;
  padding: 60px;
  gap: 30px;
  background-color: white;
`;

export const PersonInfoSmall = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  /* font-size: 16px; */
  color: grey;
`;

export const PersonInfoBig = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: 500;
`;

export const PersonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;