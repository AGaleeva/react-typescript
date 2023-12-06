import { useState, ChangeEvent } from 'react';
import Input from "components/input";
import { Homework23Wrapper, LoginCard } from "./styles";
import Button from 'components/button';

function Homework23() {
  const [nameValue, setNameValue] = useState<string>('');
  const [surnameValue, setSurnameValue] = useState<string>('');
  const [ageValue, setAgeValue] = useState<string>('');
  const [positionValue, setPositionValue] = useState<string>('');

  const onChangeNameValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setNameValue(event.target.value);
    // console.log(event.target.value);
  }
  const onChangeSurnameValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setSurnameValue(event.target.value);
    // console.log(event.target.value);
  }
  const onChangeAgeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setAgeValue(event.target.value);
    // console.log(event.target.value);
  }
  const onChangePositionValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setPositionValue(event.target.value);
    // console.log(event.target.value);
  }
      
  return (  
    <Homework23Wrapper>
      <LoginCard>
        <Input 
          placeholder='First name'
          label='First name'
          name='firstName'
          type='text'
          value={nameValue}
          onChange={onChangeNameValue}
        />        
        <Input 
          placeholder='Last name'
          label='Last name'
          name='lastName'
          type='text'
          value={surnameValue}
          onChange={onChangeSurnameValue}
        />
        <Input 
          placeholder='Age'
          label='Age'
          name='age'
          type='text'
          value={ageValue}
          onChange={onChangeAgeValue}
        />
        <Input 
          placeholder='Position'
          label='Position'
          name='position'
          type='text'
          value={positionValue}
          onChange={onChangePositionValue}
        />
        <Button 
          name={'Create personal card'} 
          // type='submit'
          onClick={() => {
            return (
              <LoginCard>
                <p>First name: {nameValue}</p>
                <p>Last name: {surnameValue}</p>
                <p>Age: {ageValue}</p>
                <p>Position: {positionValue}</p>
              </LoginCard>
            );            
            } 
          }
        />
      </LoginCard> 
  
    </Homework23Wrapper>
  );
}

export default Homework23;