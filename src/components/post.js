import React from 'react';
import {useState, useEffect} from 'react'

function Post() {
  const [data,setData]=useState([]) 
  const [searchTerm,setSearchTerm]=useState("")
  const [value,setValue]=useState("")
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>
      data.json()
    ).then((val)=>{
    setData(val)
  }).catch((err)=>{
    console.log(err)
  })
},[])

  return (
    <div className="App">
      <input style={{alignItems:"center"}} type="text" onChange={(e)=>setValue(e.target.value)} ></input>
      <button onClick={(e)=>{setSearchTerm(value)}}>search</button>
      {data.filter((value)=>{
        const sentence=value.title
        const body=value.body
        if(searchTerm===""){
          return value
        }else if(sentence.includes(searchTerm) && body.includes(searchTerm)){
          return value
        }
      })
      .map((user)=>{
        return(
          <div>
        <p>{user.title}</p>
        <p>{user.body}</p>
        </div>
        )})

      }
    </div>
  );
}

export default Post;


