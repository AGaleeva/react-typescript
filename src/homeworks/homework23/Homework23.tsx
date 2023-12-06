import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";
import Input from "components/input";
import {
  Homework23Wrapper,
  LoginCard,
  PersonCard,
  PersonInfoBig,
  PersonInfoContainer,
  PersonInfoSmall,
} from "./styles";
import Button from "components/button";

interface UserInfo {
  name: string;
  surname: string;
  age: string;
  position: string;
}

function Homework23() {
  const [nameValue, setNameValue] = useState<string>("");
  const [surnameValue, setSurnameValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");
  const [positionValue, setPositionValue] = useState<string>("");

  // создать state, который решает когда показывать карточку, а когда нет
  const [isShowCard, setIsShowCars] = useState<boolean>(false);

  // создаем контейнер (state), в котором будет храниться инф-я для карточки, чтобы она туда добавлялась только на onClick
  const [userInfo, setUserInfo] = useState<UserInfo>({name: '', surname: '', age: '', position: ''});


  // const onChangeNameValue = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setNameValue(event.target.value);    
  // };
  // const onChangeSurnameValue = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setSurnameValue(event.target.value);   
  // };
  // const onChangeAgeValue = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setAgeValue(event.target.value);    
  // };
  // const onChangePositionValue = (
  //   event: ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setPositionValue(event.target.value);    
  // };
  const onChangeInputValue = (
    event: ChangeEvent<HTMLInputElement>,
    setInputValue: Dispatch<SetStateAction<string>>
  ) => {
    setInputValue(event.target.value);
  };

  return (
    <Homework23Wrapper>
      <LoginCard>
        <Input
          placeholder="First name"
          label="First name"
          name="firstName"
          type="text"
          value={nameValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeInputValue(event, setNameValue)
          }
        />
        <Input
          placeholder="Last name"
          label="Last name"
          name="lastName"
          type="text"
          value={surnameValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeInputValue(event, setSurnameValue)
          }
        />
        <Input
          placeholder="Age"
          label="Age"
          name="age"
          type="text"
          value={ageValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeInputValue(event, setAgeValue)
          }
        />
        <Input
          placeholder="Position"
          label="Position"
          name="position"
          type="text"
          value={positionValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeInputValue(event, setPositionValue)
          }
        />
        <Button
          name={"Create person card"}
          // type='submit'
          onClick={() => {
            if (
              !!nameValue &&
              !!surnameValue &&
              !!ageValue &&
              !!positionValue
            ) {
              setUserInfo({
                name: nameValue,
                surname: surnameValue,
                age: ageValue,
                position: positionValue,
              });
              setIsShowCars(true);
            } else {
              setIsShowCars(false);
              setTimeout(() => alert("Please enter all data"), 5);
            }
          }}
        />
      </LoginCard>
      {isShowCard && (
        <PersonCard>
          <PersonInfoContainer>
            <PersonInfoSmall>First name</PersonInfoSmall>
            <PersonInfoBig>{userInfo.name}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Last name</PersonInfoSmall>
            <PersonInfoBig>{userInfo.surname}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Age</PersonInfoSmall>
            <PersonInfoBig>{userInfo.age}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Position</PersonInfoSmall>
            <PersonInfoBig>{userInfo.position}</PersonInfoBig>
          </PersonInfoContainer>
        </PersonCard>
      )}
    </Homework23Wrapper>
  );
}
export default Homework23;
