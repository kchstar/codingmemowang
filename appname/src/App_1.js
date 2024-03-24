import {useState} from 'react';
import './App.css';

function App() {
  const[papamoney, setPapamoney] = useState(0);
  const getSalary =() => {
    setPapamoney(papamoney + 700);
  }
  return (
    <div className="App">
      <h1>여기는 아빠의 앱입니다.</h1>
      <button onClick={getSalary}>아빠 월급날</button> 
      <p>월급 계좌의 잔액은{papamoney}입니다.</p>
        
      
    </div>
  );
}

export default App;
