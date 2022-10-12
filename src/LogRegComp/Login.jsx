import React, { useEffect, useState } from 'react';
 import { Formik } from 'formik';
import axios from 'axios';
 
 function Loginform () {
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [fullName,setFullName]=useState();
const [phone,setPhone]=useState();
const [data,setData]=useState();


useEffect(()=>{

      axios.get("/api-users/users").then((res) => {
      setData(res.data);
      console.log(data)
          })
  


},[]);



//   const LogUser = (event) => {
//     event.preventDefault()
//     let i=0;
// data.map((e,index)=>{
//     if(e.email==email&&e.password==password)
//     {
//     localStorage.setItem("logged",e._id);
//     if(localStorage.getItem("logged"))
//     {}
//     alert("welcome "+ e.fullName+""+index)
//     i=99;
    
//     }
//     else if(i==0)  {alert("wrong email or paswword "+""+index);i=99;}
//   })

  
// }
   
const logIn = (e) => {
  e.preventDefault()
  axios.post("/api-users/users/login",{email,password}).then((res) => {
    console.log(res.data)
    if(res.data.status=="logged")
    {
     
      localStorage.setItem("logged", res.data.user._id);
      console.log(localStorage.getItem("logged"))
      
    }
alert(res.data.status)
  });
}


  return(
   <div>
   <form onSubmit={logIn}>

    <input type="email"  placeholder='email' className="reg-input" onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" className="reg-input" placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
    <button> submit</button>

   </form>
   </div>
  )
 }
 
 export default Loginform;