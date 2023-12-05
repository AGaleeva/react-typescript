import { useState, ChangeEvent } from 'react';
import Input from "components/input";
import Button from "components/button";
import { Homework22Wrapper, LoginCard, LoginFormName } from "./styles";

function Homework22() {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  
  const onChangeEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);    
  }

  const onChangePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  }

  return (    
    <Homework22Wrapper>
      <LoginCard>
        <LoginFormName>Login Form</LoginFormName>
        <Input 
          value={emailValue} 
          onChange={onChangeEmailInput} 
          name="email" 
          placeholder="Enter your email" 
          disabled={false} 
          label="Email" 
          type='text' 
        />
        {/* disabled={false}  - это можно не указывать, тогда оно будет автоматически false*/}
        {/* {emailValue}  - для демонстрации того, что мы получили эти данные */}
        <Input 
          value={passwordValue}
          onChange={onChangePasswordInput}
          name="password" 
          placeholder="Enter your password" 
          disabled={false} 
          label="Password"
          type='password' 
        />
        {/* {passwordValue} */}
        <Button 
          type='button' 
          name='LogIn' 
          onClick={() => { 
          console.log('Login action')
          console.log(`Post data`, {email: emailValue, password: passwordValue})
          }
        }/>
      </LoginCard>
    </Homework22Wrapper>
  );
};
 

export default Homework22;