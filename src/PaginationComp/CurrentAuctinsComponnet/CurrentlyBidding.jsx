import axios from 'axios';
import React, { useEffect, useState } from 'react'





 const CurrentlyBidding = () => {
  const [currentBiddings, setCurrentBiddings] = useState();
  const [loading, setloading] = useState(false);


  useEffect(()=>{
    const fetchCurrentBidding= async()=>{
        setloading(true);
        axios.post("/currentBidding",{id:localStorage.getItem("logged")}).then((res) => {
        setCurrentBiddings(res.data);
        setloading(false)
       ;
            
            })
    }

    fetchCurrentBidding();

  },[])





  return (
    <div>


    </div>
  )
}
export default CurrentlyBidding;
