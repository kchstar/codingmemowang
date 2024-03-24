import {useState} from 'react';
import './App.css';

function Child(props) {

  const[papamoney, setPapamoney] = useState(0);

    return(
        <div className='Child'>
        <h1>여기는 Child{props.name}엡 입니다.</h1>
        <hr />
        </div>       
    ); 
  }
  
  
function App(){
    const [papamoney, setPapamoney] = useState(0);
    const getSalary=()=>{
        setPapamoney(papamoney + 700);
    }


    return (
        <>
        <div className="App">
            <h1>여기는 아빠 앱 입니다.</h1>
            <button onClick={getSalary}>아빠의 월급날</button> 
            <p>월급 계좌의 잔액은 {papamoney}만원입니다. </p>            
            <hr />
            <Child name="제니"/>
            <Child name="BTS"/>
        </div>
        </>
        );
}

export default App;
