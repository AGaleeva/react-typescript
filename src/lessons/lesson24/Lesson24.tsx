import { ChangeEvent, useEffect, useState } from 'react';

import Input from 'components/input';

import { Lesson24Wrapper, Text, Card } from "./styles";

function Lesson24() {
  const [inputText, setInputText] = useState<string>("");
  const [catFact, setCatFact] = useState<string | undefined>(undefined);
  const [catError, setCatError] = useState<string | undefined>(undefined);

  const lesson24: string = "Lesson 24";

  const onChangeInputTextValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const getCatFacts = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      
      setCatFact(data.fact);
    } else {
      setCatError("Error during getting cat fact");
    }
  };

  // Lifecycle method: Inicialization of the component - его можно вызвать только один раз. Тут обычно делаются get-запросы на сервер, чтобы отобразить что-то на странице в самом начале. Его признаком является пустой массив [].
  useEffect(() => {
    console.log("component Lesson24 has mounted");
    getCatFacts();
  }, []);

  // Lifecycle method: Update of the component - тут можно делать любые необходимые действия при обновлении. Например: вводим что-то с клавиатуры, и на каждый введенный символ следим за обновлением компонента и отправляем запрос на сервер на поиск совпадений с введенными символами.
  useEffect(() => {
    console.log("component Lesson24 has updated");
    getCatFacts();
  }, [inputText]);

  // Lifecycle method: Unmounting of the component ('dying')
  useEffect(() => {
    return () => setCatFact(undefined);
  }, [setCatFact]);

  // infinitife rendering ---> never use useEffect without 2nd argument (array of dependences)    !!!!!!!!!!!!!

  return (
    <Lesson24Wrapper>
      <Card>
        <Text>{lesson24}</Text>
        <Input
          label="Get new fact about cat on every inputed symbol"
          name="inputText"
          value={inputText}
          onChange={onChangeInputTextValue}
        />

        <Text>Facts about cats: </Text>
        {catFact && <Text>{catFact}</Text>}
        {catError && <Text>{catError}</Text>}
      </Card>
    </Lesson24Wrapper>
  );
}

export default Lesson24;