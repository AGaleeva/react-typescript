import ReactDOM from 'react-dom/client';
// import './index.css'; нам больше не нужны стили ccs, используются стайлед-компоненты
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />  
);

reportWebVitals();
