import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom"

function Dashboard() {
    let navigate = useNavigate();

    useEffect(() =>{
        let token =sessionStorage.getItem("token");
        if (!token )  navigate("/login");
       
    },[])


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard