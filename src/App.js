import './App.css';
import { useState } from 'react';

function App() {

  let [advise, setAdvise] = useState(["Step 1: Learn React", "Step 2: Make Money", "Step 3: Invest Your Income"]);
  let [indexofadvise, setindexofadvise] = useState(1);

  function previousHandler(){
    if (indexofadvise > 1) {
      setindexofadvise(indexofadvise - 1);
    }
  }

  function nextHandler(){
    if (indexofadvise < 3) {
      setindexofadvise(indexofadvise + 1);
    }
  }

  return (
    <div className="container">

      <div className='numberdiv'>{Array.from([1, 2, 3], (x) => (
        <button style={{backgroundColor : x <= indexofadvise ? "#6e45f1" : 'transparent', color : x <= indexofadvise ? "white" : 'black'}} className='btnofupward'>{x}</button>
      ))}</div>

      <div className='paradiv'>{advise[indexofadvise - 1]}</div>

      <div className='nextprviousdiv'>
        {Array.from(["Previous", "Next"], x => (
          <button onClick={x == "Previous" ? previousHandler : nextHandler}>{x}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
