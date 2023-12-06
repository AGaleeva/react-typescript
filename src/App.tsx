import GlobalStyles from 'styles/GlobalStyles';
// мы избавились от импорта из App.css и заменили их styled компонентом GlobalStyles
import Lesson20 from './lessons/lesson20';
import Homework20 from './homeworks/homework20';
import Lesson21 from './lessons/lesson21';
import Homework21 from './homeworks/homework21';
import Lesson22 from 'lessons/lesson22';
import Homework22 from 'homeworks/homework22';
import Homework23 from 'homeworks/homework23';

function App() {
  return (
    <>
    <GlobalStyles />
    {/* <div className="App"> */}
      {/* <Lesson20 />  */}
      {/* <Lesson21 /> */}
      {/* <Lesson22 /> */}

      {/* <Homework20 /> */}
      {/* <Homework21 /> */}
      {/* <Homework22 /> */}
      <Homework23 />
    {/* </div> */}
    </>
  );
}

export default App;
