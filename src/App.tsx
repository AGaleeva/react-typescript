import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
// мы избавились от импорта из App.css и заменили их styled компонентом GlobalStyles
import Lesson20 from './lessons/lesson20';
import Homework20 from './homeworks/homework20';
import Lesson21 from './lessons/lesson21';
import Homework21 from './homeworks/homework21';
import Lesson22 from 'lessons/lesson22';
import Homework22 from 'homeworks/homework22';
import Homework23 from 'homeworks/homework23';
import Lesson24 from 'lessons/lesson24';
import Homework24 from 'homeworks/homework24';
import Lesson25 from 'lessons/lesson25';
import Homework25 from 'homeworks/homework25';
import Layout from 'components/layout';
import About from 'pages/about';
import Home from 'pages/home';
import Users from 'pages/users';
import Clients from 'pages/clients';
import { Apple, Facebook, Sega } from "pages/clients/modules";
import Lesson27 from 'lessons/lesson27'; // вставим вместо компонента <Home />

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Lesson27 />} /> 
          <Route path="/users" element={<Users />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/apple" element={<Apple />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/sega" element={<Sega />} />
          <Route path="*" element="Page Not Found" />
          {/* <Route path="/clients/scrum" element={<Scrum />} /> */}
        </Routes>
        {/* <div className="App"> */}
        {/* <Lesson20 />  */}
        {/* <Lesson21 /> */}
        {/* <Lesson22 /> */}
        {/* <Lesson24 /> */}
        {/* <Lesson25 /> */}
        {/* <Homework20 /> */}
        {/* <Homework21 /> */}
        {/* <Homework22 /> */}
        {/* <Homework23 /> */}
        {/* <Homework24 /> */}
        {/* <Homework25 /> */}
        {/* </div> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
