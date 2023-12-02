import { useState } from 'react';
import './styles.css'
import Counter from '../../components/counter';
import { randomUUID } from 'crypto';

function Lesson21() {   
  let emptyContainer: null = null;
  let undefContainer: undefined = undefined;

  // тип tupel - позволяет хранить массив фиксированной длины, но с разными типами данных
  // ниже позволяется только 3 эл-та со строгим порядком типов данных: строка, число, строка
  let tupelArray: [string, number, string] = ['tiger', 3, 'lion']; 

  // тип void
  function hello(): void {
    console.log('Hello world');
  }
  const say = (): void => { // the same as () => void = () => {}
    console.log('Hi');
  }

  // function with return
  const sum = (a: number, b: number): number => {  // (a: number, b: number) => number = () => {}
    return a + b;
  }
   const sum1 = (a: number, b: number): string => {   // строку можно вернуть только черз литерал
    return `${a + b}`;
  }

  // type 'any' - non-strict typisation, when we do not know the type
  let anyType: any = 3;
  anyType = '3';
  anyType = () => console.log('Any function');

  // enum - перечисляемые константы

  enum SEASONS {
    WINTER = 'Winter',
    SPRING = 'Spring',
    SUMMER = 'Summer',
    AUTUMN = 'Autumn'
  }

  let spring: SEASONS = SEASONS.SPRING;

  console.log(SEASONS.SUMMER === 'Summer');

  // типизация объектов

  interface Persons {
    pets: string[];
  }

  interface SomeInterface {
    qwe?: string;
  }

  interface Person extends Persons, SomeInterface {
    name: string;
    lastName: string;
    age: number;
    hairColor: string;
    isMarried?: boolean // ? - обозначает, что сво-во не обязательно у объекта
  }

  const person: Person = {
    name: 'John',
    lastName: 'Smith',
    age: 35,
    hairColor: 'Black',
  //  isMarried: false - теперь можно передавать, можно не передавать
    pets: ['Tiger']
  };

  // несколько типов одной переменной
  let some: string | undefined = undefined;
  some = 'hello';

  const [count, setCount] = useState<number>(0);
  const onPlus = (): void => {
    setCount((prevValue: number) => prevValue + 1)
  };
  const onMinus = (): void => {
    setCount((prevValue: number) => prevValue - 1)
  };

  
  return (
    <div className="lesson21-wrapper">
      <Counter count = {count} onPlus = {onPlus} onMinus = {onMinus} />      
    </div>
  );
}

export default Lesson21;