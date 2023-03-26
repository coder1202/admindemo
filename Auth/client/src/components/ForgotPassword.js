import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';


const ForgotPassword = () => {

  //use useParams to get id and token 
  //and for valid user that the link open in particular email or not
  const {id,token}=useParams();
  const history=useNavigate();

  const [password,setPassword]=useState("");
  const [mesaage, setMesaage] = useState("");

  const userValid=async()=>{
    //this api for verify user
    const res=await fetch(`/forgotpassword/${id}/${token}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
   
    });
    const data=await res.json();
    if(data.status ===201)
    {
      console.log("user Valid");
    }else
    {
      history("*");
    }
  }
  const setval=(e)=>{
setPassword(e.target.value);
  }
  const sendpassord=async(e)=>{
    e.preventDefault();
    const res=await fetch(`/${id}/${token}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({password})
    });
    const data=await res.json();
    if(data.status ===201)
    {
        setPassword("");
        setMesaage(true);
    }else
    {
      toast.error("!Token Expired Generate New Link");
    }

  }
  useEffect(()=>{
    userValid();
  })

  return (
    <>
    <section>
    <div className="form_data">
        <div className="form_heading">
            <h1>Enter Your New Password</h1>
        </div>

        {mesaage ? <p style={{ color: "green", fontWeight: "bold" }}>pasword reset link send Succsfully in Your Email</p> : ""}
                    <form>
            <div className="form_input">
                <label htmlFor="email">New Password</label>
                <input type="password" value={password} onChange={setval} name="password" id="password" placeholder='Enter Your New Password' />
            </div>

            <button className='btn' onClick={sendpassord}>Send</button>
        </form>
        <ToastContainer />
    </div>
</section>
</>
  )
}

export default ForgotPassword