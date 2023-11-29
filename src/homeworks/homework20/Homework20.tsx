import { useState } from 'react';
import './styles.css';

function Homework20() {
  let firstName: string = "John";
  let lastName: string = "Doe";
  let job: string = "Software Engineer";
  let isManager: boolean = false;
  let experience: number = 5;
  let email: string = "john.doe@google.com";
  let state: string = !isManager ? 'Employee' : 'Manager'   //  'Manager' === 'Employee'   :)))

  let programLangs: string[] = ['JavaScript', 'Python', 'Scala'] // 'Machine Learning' === 'Python' :)))

  const showProgramLangs = programLangs.map((el: string) => {
    return (
      <li>
        {el}
      </li>
      );
  });
  
  return <div className='hw20-wrapper'>
    <div className='card-container'>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Occupation: {job}</p>
      <p>Position: {state}</p>
      <p>Experience: {experience} years</p>
      <p>E-mail: {email}</p>
    </div>
    <div  className='card-container'>
      <ul>{showProgramLangs}</ul>
    </div>
  </div>;
}

export default Homework20;