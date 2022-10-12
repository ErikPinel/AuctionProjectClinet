import React, { useEffect, useState } from 'react';
 import { Formik } from 'formik';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios  from 'axios';
import Axios  from 'axios';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import "./addItem.css"

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  }).required();

 function AddItem () {
const [title,setTitle]=useState();
const [dueDate,setDueDate]=useState();
const [description,setDescription]=useState();
const [SellerID,setSellerID]=useState();
const [offers,setOffers]=useState([0]);
const [section,setSection]=useState("Men-section");
const [price,setPrice]=useState(0);
const [data,setData]=useState();
const [image,setImage]=useState();
const [imageURL,setImageURL]=useState();
const [fileVisit,setFileVisit]=useState("no-visit");



const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);




useEffect(()=>{

      // axios.get("/api-users/users/").then((res) => {
      // setData(res.data);
      //     })
      //   setSellerID(localStorage.getItem("logged"))

  if(image)
  uploadImage();
  },[image]);



const postItem = (event) => {
    const currentBid=price;
    const bidderID=localStorage.getItem("logged")
  

    const myDate = (new Date(new Date().getTime()+(dueDate*24*60*60*1000))).getTime();
    let obj = { title: title, dueDate: myDate,description:description,SellerID:SellerID,offers:[{currentBid:Number(currentBid),bidderID}],image:imageURL } ;
    
    if(section== "Men-section")
    {
    axios
      .post("/api-itemMen/itemmen", obj)
      .then((res) => console.log("post"+res));
      console.log()
    }
   else if(section=="Women-section")
    {
    axios
      .post("/api-itemWomen/itemwomen", obj)
      .then((res) => console.log("post"+res));
    }
  else if(section=="Kids-section")
    {
    axios
      .post("/api-itemKids/itemkids", obj)
      .then((res) => console.log("post"+res));
    }
    else alert("fill all fields")
console.log(section)

  };

 const uploadImage=()=>{
    const formData=new FormData()
    formData.append('file',image)
    formData.append('upload_preset','hztpszww')
console.log(image)
    Axios.post("https://api.cloudinary.com/v1_1/djz5ywj1e/image/upload",formData)
    .then((response)=>setImageURL(response.data.secure_url))
    console.log(image)
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0])
    { 
      setImage(event.target.files[0]);
      uploadImage();
    }
      else alert("not a valid image")
    
  }
  return(
   <div className='add-page-container'>
    <h1> add new item you want to sell</h1>
  <hr></hr>
    <div className='inputs-container'>
    
   
<div className='title-container'>
    <span className='input-span'>
    <div className='input-title'> section</div>
    <select  onChange={(e)=>setSection(e.target.value)} name="section" id="item-section"  >
        <option  value="Men-section">Men-section</option>
        <option  value="Women-section">Women section</option>
        <option  value="Kids-section">Kids section</option>
    </select>
    </span>
    <span className='input-span'>
    <div className={`input-title`}> pick image</div> <input  className={ `file-input  ${fileVisit}`} type="file"  onChange={(event)=>{setImage(event.target.files[0]); setTimeout(setFileVisit('file-visted'),100)}}></input>
    </span>
    </div>
    <div class="parent">
  
<div class="div1">    <TextField className='add-inputs' label="Title" variant="standard" onChange={(e)=>setTitle(e.target.value)} />
 </div>
<div class="div2">    <TextField className='add-inputs' label="auction duration(days)" variant="standard"  onChange={(e)=>setDueDate(e.target.value)} />
 </div>
<div class="div3">    <TextField className='add-inputs' label="Description" variant="standard" onChange={(e)=>setDescription(e.target.value)} />
 </div>
<div class="div4">    <TextField className='add-inputs' label="starting price" variant="standard" onChange={(e)=>setPrice(e.target.value)} />
 </div>
<div class="div5">   <Button variant="contained" onClick={()=>{if(section&&title&&dueDate&&description&&price&&image){postItem(); alert("your item was added to the section") ;window.location.reload(false)} else alert("enter all fields")}}> submit</Button>
</div>
</div>



</div>
   </div>
  )
 }
 
 export default AddItem;