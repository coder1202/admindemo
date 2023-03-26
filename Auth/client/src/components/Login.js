import React, { useState } from 'react'
import "./mix.css"
import { NavLink ,useNavigate } from 'react-router-dom';

const Login = () => {
    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });
    const history=useNavigate();
    console.log(inpval);

    const setVal = (e) => {
        //field ni value usestate ma store krava mate
        //console.log(e.target.value);
        const { name, value } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }

        })
    };
    const loginuser = async (e) => {
        e.preventDefault();
        const { email, password } = inpval;

        if (email === "") {
            alert("Please Enter Your Email");
        } else if (!email.includes("@")) {
            alert("Plase Enter Valide Email Adress");
        } else if (password === "") {
            alert("Enter Password");
        }
        else if (password.length < 6) {
            alert("password must be 6 char");
        }
        else {
            //  console.log("User Registration Succesfully Done");
            const data = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });
            const res = await data.json();
            console.log(res);
            //router wali final ma json ma status 201 pass krvanu 
            //userDatatoken
            if (res.status === 201) {
               localStorage.setItem("usersdatatoken",res.result.token);
               
               history("/dash");
               setInpval({ ...inpval, email: "", password: "" });
            }
        }
    }
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back , Login In</h1>
                        <p>Hi , We are you glad you are back.Please Login</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <lable htmlFor="email">Email</lable>
                            <input type="email" name="email" value={inpval.email} onChange={setVal} id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <lable htmlFor="passowrd">Password</lable>
                            <div className="two">

                                <input type={(!passShow ? "password" : "text")} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your Password ' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <button className='btn' onClick={loginuser}>Login</button>
                        <p> Dont Have an Acoount ? <NavLink to="/Register">sign up</NavLink></p>
                        <p style={{color:"black",fontWeight:"bold"}}> Forgot Pssword <NavLink to="/password-reset">Click Here</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Login;
