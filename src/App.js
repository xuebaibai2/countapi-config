import logo from './logo.svg';
import './App.css';
import countapi from 'countapi-js';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    countapi.info('happy-birthday-gina.vercel.app', 'IntroPageV4').then(res => {
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'homeV4').then(res => {
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'letterV4').then(res => {
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'photoV4').then(res => {
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'todosV4').then(res => {
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'apologyV4').then(res => {
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
    
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
