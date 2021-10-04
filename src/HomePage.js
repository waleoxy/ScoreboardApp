import React, { useEffect, useState } from 'react';
import "./HomePage.css"

function HomePage() {
    const [studentsResult, setStudentsResult] = useState([])
    const [start, setstart] = useState(false)
  
   let load = null

    const handleStart =  () => {
        if(start){
        load = setInterval(() => {
             let data = []
         fetch("https://randomuser.me/api/?results=6")
        .then(response =>
            data =response.json()
        ).then((data => setStudentsResult(data.results)))
        .catch( error => console.error(error)
        )
        
    }, 1000);
    
        return load
    }
    else{
        setstart (!start)
    }
        
 }

    const handleStop =  () => {
        setstart(false)
    }

    useEffect(() => {
        handleStart()
    }, [])

    let counter = 0;
    let rand = []

    return (
        
<div className="container">
    <div className="header">
    <button onClick ={handleStart}>Start</button>
    <h1> My Leaderboard</h1>
    <button onClick ={handleStop}>Stop</button>
    </div>
    ;
        { 
          
            studentsResult.map(result =>(
        
        <div className="row">
            <div className="col-10 col-sm-8 col-md-6">
        <div className="card m-1 pb-2" style={{height: '8rem', width:'80vw'}}>
            <div class="card-body">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Username</th>
                        <th scope="col">Score</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{counter += 1 }</th>
                    <td>
                        <tr>
                        <img src ={result.picture.thumbnail}/>
                        <td>{result.login.username}</td>
                        </tr>
                    </td>
                   
                    <td>{ rand = Math.floor(Math.random() * 100 * (result.dob.age/100) )}</td>
                    
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
            </div>
        </div>
        ))
        }
        </div>
        )   
   
}

export default HomePage
