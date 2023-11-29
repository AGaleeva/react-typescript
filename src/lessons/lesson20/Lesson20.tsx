function Lesson20() { 
  
  let isActive: boolean = true;

  let num: number = 3;
  num = 2.35;

  let info: string = `Ваше число: ${num}`;

  let fruits: string[] = ['apple', 'orange'];
  let numbers: number[] = [2, 3, 5];  

  return <div className="lesson20-wrapper">
    {info}
  </div>;
  
}

export default Lesson20;