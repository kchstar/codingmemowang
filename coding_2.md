: npm create vite@latest
    project name: ...
    framework: react
    variant : javascript
: package.json화일설치
    % npm install
    % npm run dev
: jsonplaceholder
% npm run dev

: App.jsx
   >import { useState } from 'react'
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

# useEffect(함수, 변수)
    useEffect(()=>{
        
    })