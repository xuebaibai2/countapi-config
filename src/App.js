import './App.css';
import countapi from 'countapi-js';
import { useEffect, useState } from 'react';


function App() {
  const [intro, setIntro] = useState({});
  const [home, setHome] = useState({});
  const [letter, setLetter] = useState({});
  const [photo, setPhoto] = useState({});
  const [todos, setTodos] = useState({});
  const [apology, setApology] = useState({});
  useEffect(() => {
    countapi.info('happy-birthday-gina.vercel.app', 'IntroPageV4').then(res => {
      setIntro(res);
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'homeV4').then(res => {
    setHome(res);
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'letterV4').then(res => {
    setLetter(res);
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'photoV4').then(res => {
    setPhoto(res);
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'todosV4').then(res => {
    setTodos(res);
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
  countapi.info('happy-birthday-gina.vercel.app', 'apologyV4').then(res => {
    setApology(res);
      console.log(res.key, res.value);
      console.log('---------------------------------------');
  });
    
  }, []);

  return (
    <div className="App">
      <p>{intro.key} : {intro.value}</p>
      <p>{home.key} : {home.value}</p>
      <p>{letter.key} : {letter.value}</p>
      <p>{photo.key} : {photo.value}</p>
      <p>{todos.key} : {todos.value}</p>
      <p>{apology.key} : {apology.value}</p>
    </div>
  );
}

export default App;
