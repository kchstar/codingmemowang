import { useState, useReducer, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase =()=>{
    setCount(count + 1)
  }

  const decrease =()=>{
    setCount(count - 1)
  }
  // 3. 심부름꾼, Reducer
  const reducer = (state, action) =>{
    //switch(action.type)
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

  const reducerTodo = (state, action) =>{
    //switch(action.type)
    // console.log("action.type", action.type)
    switch(action.type){
      case 'adding':
        return {
          todos:[...state.todos, action.payload ]
     
      default: 
      return state
    }
  }

   // 1. 사장님  할일 상태를 가지고 있다. 
   const initialState = {
    todos : [], 
   }
   // 업체 이름 reducer
   const [countState, dispatch] = useReducer(reducer, 0) //reducer , 초기 값
   // 업체 이름 reducerTodo
   const [state, dispatchTodo] = useReducer(reducerTodo, initialState)

   // 2. 직원, Dispatch , 지시 내용 
   // dispatch ({type:'increasing'})
   // dispatch ({type:'decreasing'})
   const addNewItem=()=>{
    dispatch ({
      type:'adding',
      payload: {
        id: Date.now(), 
        text: addNewItem, 
      }
    })
   }


  const increaseByReducer = ()=>{
    dispatch ({type:'increasing'})
  }
  const decreaseByReducer = ()=>{
    dispatch ({type:'decreasing'})
  }
  const doubleByReducer = ()=>{
    dispatch ({type:'double'})
  }

  return (
    <>
      <div>
        <h2>1. useState로 상태 관리하기 </h2>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <h2>{count}</h2>
        <hr />
        <h2>2. useReducer로 상태 관리하기 </h2>
        <button onClick={increaseByReducer}>+</button>
        <button onClick={decreaseByReducer}>-</button>
        <button onClick={doubleByReducer}>x2</button>
        <h2>{countState}</h2>
        <hr />
        <h2>3. useReducer로 할일 메모 만들어 보기 </h2>
        <input placeholder='여기에 할일을 입력'></input>
        <button onClick={addNewItem}>할일 추가</button>
        <ul>
          <li>1. 할일1 표시 됨</li>
          <li>2. 할일2 표시 됨</li>
        </ul>

      </div>
      <p className="read-the-docs">
        유튜브 코팅 메모 왕  
      </p> 
    </>
  )
}

export default App