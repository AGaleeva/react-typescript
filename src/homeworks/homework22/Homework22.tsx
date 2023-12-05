import Input from "components/input";
import Button from "components/button";
import { Homework22Wrapper, LoginCard, LoginFormName } from "./styles";

function Homework22() {
  return (    
    <Homework22Wrapper>
      <LoginCard>
        <LoginFormName>Login Form</LoginFormName>
        <Input name="email" placeholder="Enter your email" disabled={false} label="Email" />
        <Input name="password" placeholder="Enter your password" disabled label="Password" />
        <Button name="LogIn" onClick={() => console.log('Login action')}/>
      </LoginCard>
    </Homework22Wrapper>
  );
};
 

export default Homework22;