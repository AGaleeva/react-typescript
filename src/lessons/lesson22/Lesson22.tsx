import {CSSProperties} from 'react';
import { type } from "os";
import Button from 'components/button';
import { Lesson22Wrapper, LoginCard } from './styles';

function Lesson22() {

  // ТИПЫ

  // Union type
  type WordOrNumber = string | number;
  let wordOrNumber: WordOrNumber = 2;

  // Interface vs. type

  interface Person {
    name: string;
    age: number;
  }

  interface Person {
    lastName: string;
  }

  type PersonType = {
    name: string;
    age: number;
  }
  const person: Person = {
    name: 'John',
    lastName: 'Smith',
    age: 25,
  }

  const person1: PersonType = {
    name: 'John',    
    age: 25,
  }

  // Generics

  type Car<T> = {
    name: string;
    color: string;
    params: T;
  }
  
  type Car1<Par, Color, Name> = {
    name: Name;
    color: Color;
    params: Par;
  }

  const car: Car<number[]> = {
    name: 'Porshe',
    color: 'Red',
    params: [2, 3, 4]
  }

  const car1: Car1<number[], string, string> = {
    name: 'Porshe',
    color: 'Red',
    params: [2, 3, 4]
  }

  // STYLES
  // первый способ стилизации: создать файл styles.css, импортировать его и добавлять классы

  // второй способ: передать объект в атрибут тега style
  // значение пишем в строке

  // Представим, что следующая константа - пропса, пришедшая от родительского компонента
  const isRed: boolean = true;

  const paragraphStyles: CSSProperties = {
    fontStyle: "italic",
    fontSize: "20px",
    color: isRed ? "rgb(255, 0, 0)" : "blue",
  };

  return (
    <Lesson22Wrapper>
      <p style={paragraphStyles}>Lesson 22</p>
      <LoginCard> <Button isRedFont = {true} disabled = {true} name='LogIn' onClick={() => {}} /> </LoginCard>
    </Lesson22Wrapper>)
}

export default Lesson22;