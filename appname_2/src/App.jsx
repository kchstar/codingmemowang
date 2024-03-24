import { useState, useEffect, useRef } from 'react'
    import './App.css'

    function App() {
      const [name, setName] = useState()
      const [keyword, setKeyword ] = useState()
   
      useEffect(()=>{
                    // fetch(url, {option})
    fetch(`https://jsonplaceholder.typicode.com/users/?username=${keyword}`,
    {
        method: 'GET'
        //POST -> to send server
        //GET  -> receive 
        //headers:{}
    })
    .then(res=>{
        if(res.ok) console.log('successfully accessed ')
        else console.log("DB is not found")

        return res.json()

    .then(data => console.log(data))
    } )

    const searchInfo = ()=>{
      setKeyword(name)
     }
      }, )  
    

    // console.log('what',what)
    const changeName = (e)=>{
      setName(e.target.value) 
     
    }


    return (
        <>
        <div>
            <input 
            type='text'
            ref = {ref}
            ></input>
            <button onClick={searchInfo}>정보 검색</button>

        </div>
        <p className="read-the-docs">
            김천호 유투브 
        </p>
        <p>nane: {name}</p>
       
        </>
    )
}

    export default App

