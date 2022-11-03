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
// const handleSearch=(e)=>{
//   const search=e.target.value
//   const newFilter=data.filter((value)=>{
//     return value.data.includes(search)
//   })
//   if(search.length===0){
//     setSearchTerm([])
//   }else{
//   setSearchTerm(newFilter)
// }
// }

  return (
    <div className="App">
      <input type="text" onChange={(e)=>setValue(e.target.value)} ></input>
      <button onClick={(e)=>{setSearchTerm(value)}}>search</button>
      {data.filter((value)=>{
        const sentence=value.title
        if(searchTerm===""){
          return value
        }else if(sentence.includes(searchTerm)){
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
