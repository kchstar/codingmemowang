import { useState } from 'react'
    import './App.css'

    function App() {
                // fetch(url, {option})
    const what = fetch('https://jsonplaceholder.typicode.com/users/?username=Samantha',{
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

    return (
        <>
        <div>
            <input></input>
            <button>정보 검색</button>

        </div>
        <p className="read-the-docs">
            김천호 유투브 
        </p>
        </>
    )
}

    export default App

