import { useReducer, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase=()=>{
    setCount(count + 1)
  }
  const decrease=()=>{
    setCount(count - 1)
  }
  //3. 대리인,Reducer
  const reducer = (state, action) =>{
    // switch (action.type)
    // console.log("action.type", action.type)
    switch(action.type){
      case 'increasing':
        return state + 1
      case 'decreasing':
        return state - 1
      case 'double':
        return state * 2
      default: 
        return state 
    }
  }
 


 //1. 사장, 상태를 가지고 있다. 
                  // 직원dispatch             대리인reducer
  const [countState, dispatch] = useReducer(reducer, 0) // reducer, 초기값

  //2. 직원,dispatch

  // dispatch({type:'increasing'})
  // dispatch({type:'decreasing'})
  const increaseByReducer =()=>{
    dispatch({type:'increasing'})
  }
  const decreaseByReducer =()=>{
    dispatch({type:'decreasing'})
  }
  const doubleByReducer =()=>{
    dispatch({type:'double'})
  }


  return (
    <>
      <div>
        <h2>1.useState로 상태 관리하기</h2>
        <button onClick = {increase}>+</button>
        <button onClick = {decrease}>-</button>
        <h2>{count}</h2>
        <hr />
        <h2>2.useReact로 상태 관리하기</h2>
        <button onClick = {increaseByReducer}>+</button>
        <button onClick = {decreaseByReducer}>-</button>
        <button onClick = {doubleByReducer}>x2</button>
        <h2>{countState}</h2>
        <hr />
      </div>
      <p className="read-the-docs">
        유튜튜브 코딩  메모왕 !!!
      </p>
    </>
  )
}

export default App
