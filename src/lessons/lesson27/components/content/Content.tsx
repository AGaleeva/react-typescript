import { useContext } from 'react';
import { MainContext } from 'lessons/lesson27/components/main/Main';

import { ContentWrapper } from "./styles";


// interface ContentProps {
//   userData: {
//     userName: string;
//     age: number;
//     email: string;
//   };
// }

// пропсы передаваемые в Content({ userData }: ContentProps)

function Content() {
  const userData = useContext(MainContext);
  
  return (
    <ContentWrapper>
      <h3>Content Component</h3>
      <p>Username: {userData.userName}</p>
      <p>Age: {userData.age}</p>
      <p>Email: {userData.email}</p>      
    </ContentWrapper>
  );
}

export default Content;