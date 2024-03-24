import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState()
  const [keyword, setKeyword] = useState()
  let name2
  const searchInfo =()=>{
    setKeyword(name)
  }

  return (
    <>
      <div>
        <input 
        type='text'
        onChange={changeName}
        ></input>
        <button onClick={searchInfo}>정보 검색</button>

      </div>
      <p className="read-the-docs">
        김천호 유투브 
      </p>
      <p>name: {name}</p>
      <p>name2: {name2}</p>
    </>
  )
}
// fetch(url, {option})
fetch(`https://jsonplaceholder.typicode.com/users/?username=${keyword}`,{
method: 'GET'
//POST -> to send server
//GET  -> receive 
//headers:{}
})
.then(res=>{
if(res.ok) console.log('successfully accessed ')
else console.log("DB is not found")

return res.json()
})
.then(data => console.log(data))
// console.log('what',what)
const changeName = (e) =>{
setName(e.target.value)
name2 = e.target.value
}

export default App
