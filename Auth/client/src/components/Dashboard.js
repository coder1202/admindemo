/*
import React, { useContext, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';

const Dashboard = () => {

   const {logindata,setLoginData}=useContext(LoginContext);
    //  console.log();

const history =useNavigate();
    //jwt token authnetication

const DashboardValid=async()=>{
   let token= localStorage.getItem("usersdatatoken");
   //console.log(token);
   const res=await fetch("/validuser",{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
        "Authorization":token
    }
   });

   const data=await res.json();
   //console.log(data);
   if(data.status === 401 || !data){
    console.log("Error Page Redirect");
   history("*");
   } 
   else{
  //console.log("user Verify");
        setLoginData(data);
        history("/dash")
   }

} 
useEffect(()=>{
    DashboardValid();
});
  return (
    <>
       
       <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <img src="./parth_photo.jpg" style={{width:"200px",marginTop:20}}alt="" />
        <h1>User Email:{logindata.ValidUserOne.email}</h1>
       </div>
    </>
  )
}

export default Dashboard
*/

import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Dashboard = () => {

    const { logindata, setLoginData } = useContext(LoginContext);
    //console.log(logindata);
    const [data, setData] = useState(false);


    const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if (data.status === 401 || !data) {
            history("*");
        } else {
                //console.log("user verify");
                console.log("V");
                setLoginData(data);
                history("/dash");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        }, 2000)

    })

    return (
        <>
            {
                data ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src="./parth_photo.jpg" style={{ width: "200px", marginTop: 20 }} alt="" />
                    <h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1>
                </div> : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            }

        </>

    )
}

export default Dashboard;
