import logo from './logo.svg';
import './App.css';
import { AddCategory } from './components/AddCategory';
import { useState } from 'react'
import { DisplayGifs } from './components/DisplayGifs';



function App() {
  const [category, setCategory]= useState(0);
  return (
    <div className="App">
      <h2>main component</h2>
      <AddCategory setCategory={setCategory}/>
      <DisplayGifs category={category}/>
    </div>
  );
}

export default App;
