import React, { useEffect, useState } from 'react';
 import { Formik } from 'formik';
import axios from 'axios';
import "./reg.css" 
import { Button, TextField } from '@mui/material';


 function RegisterForm () {
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [fullName,setFullName]=useState();
const [phone,setPhone]=useState();
const [data,setData]=useState();


// useEffect(()=>{

//       axios.get("/api-users/users").then((res) => {
//       setData(res.data);
    
//           })
  


// },[]);



  const postUser = () => {

   
    
  

  
    let obj = { email: email, password: password,fullName:fullName,phone:phone} 
    axios
      .post("/api-users/users/register", obj)
      .then((res) => res.data=="email alredy exist"?alert("email alredy exist try to log in insted"+ res.data): localStorage.setItem("logged",res.data)).then(alert("logged")).then(window.location.reload(false))

  }

  // function del(i) {
  //   for(let i=0;i<data.length;i++)
  //   axios.delete(`/api-users/users/${data[i]._id}`);
  // }




  return(
   <div>
    <h1 > register to auction.co.il</h1>
    <div class="parent">
<div class="div1">    <TextField className='add-inputs' label="full name" variant="standard" onChange={(e)=>setFullName(e.target.value)} />
 </div>
<div class="div2">    <TextField className='add-inputs' label="password" variant="standard"  onChange={(e)=>setPassword(e.target.value)} />
 </div>
<div class="div3">    <TextField className='add-inputs' label="email" variant="standard" onChange={(e)=>setEmail(e.target.value)} />
 </div>
<div class="div4">    <TextField className='add-inputs'  label="phone number" variant="standard" onChange={(e)=>setPhone(e.target.value)} />
 </div>
<div class="div5">   <Button variant="contained" onClick={()=>{if(fullName&&password&&email&&phone){postUser()} else alert("enter all fields")}}> submit</Button>
</div>
</div>
   
   </div>
  )
 }
 
 export default RegisterForm;