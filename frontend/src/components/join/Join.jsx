import React, { useState } from 'react';
import "./join.css"
import { Link } from 'react-router-dom';
//const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];


let user;

const Join = () => {
  //const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
  const[name,setName]=useState("")
  
  
  const sendUser=()=>{
    user=name
    
  }

  return (
    <div className='joinPage'>
        <div className='JoinContainer'>
           <img src="https://cdn.shopify.com/app-store/listing_images/9f753b7cdac01ee81beaeb9b1e52bf09/icon/CKWHrdK8lPsCEAE=.jpeg" alt='logo'/>
         <h1>CHAT APP</h1>
         <input  placeholder='Enter Your Name'
          id='name' 
          className="joinInput"
        
          
          value={name}
          onChange={(e)=>setName(e.target.value)}
         

          />
        <Link to="/chat"> <button className='joinbtn' onClick={sendUser}>LOGIN</button></Link>
        </div>
    </div>
  )
}

export default Join

export {user}
