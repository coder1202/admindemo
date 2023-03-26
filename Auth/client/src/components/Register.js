import React,{useState} from 'react'
import "./mix.css"
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setcPassShow] = useState(false);

    const[inpval,setInpval]=useState({

            fname:"",
            email:"",
            password:"",
            cpassword:""
    });
    //console.log(inpval);
  
        const setVal=(e)=>{
                //field ni value usestate ma store krava mate
                //console.log(e.target.value);
                const{name,value}=e.target;
                setInpval(()=>{
                  return{
                    ...inpval,
                    [name]:value
                  }

                })
            };
        //for alert validation 
        const addUserdata=async(e)=>{
                e.preventDefault();
                //using object distrucring

                const {fname,email,password,cpassword}=inpval;
                if(fname==="")
                {
                    alert("Please Enter Your Name");
                }else if(email==="")
                {
                    alert("Please Enter Your Email");
                }else if(!email.includes("@"))
                {
                    alert("Plase Enter Valide Email Adress");
                }else if(password ==="")
                {
                    alert("Enter Password");
                }
                else if (password.length<6)
                {
                    alert("password must be 6 char");
                }
            else if(cpassword ==="")
            {
                alert("Enter Password");
            }
            else if (cpassword.length < 6)
            {
                alert("password must be 6 char");
            }else if (password !== cpassword)
            {
                alert("Password And Confirm Password Not Match")
            }
            else
            {
                const data=await fetch("http://localhost:3000/register",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        fname,email,password,cpassword
                    })
                });
                const res=await data.json();
                //console.log(res);
                //router wali final ma json ma status 201 pass krvanu 
                if(res.status === 201)
                {
                    alert("User Registration Done");
                    setInpval({...inpval,fname:"",email:"",password:"",cpassword:""});
                }
            }
            }
                

        
    return (
     
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                        <p>Please Register Yourself Here<br/></p>
                    </div>
                    <form>
                        <div className="form_input">
                            <lable htmlFor="fname">Name</lable>
                            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Enter Your Name' />
                        </div>
                       <div className="form_input">
                            <lable htmlFor="email">Email</lable>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <lable htmlFor="Passowrd">Password</lable>
                            <div className="two">
                                
                                <input type={(!passShow ? "password":"text")} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your Password ' />
                                <div className="showpass" onClick={()=>setPassShow(!passShow)}>
                                    {!passShow ? "Show" :"Hide"}
                                </div>
                            </div>
                        </div>
                        <div className="form_input">
                            <lable htmlFor="passowrd">Conform Password</lable>
                            <div className="two">
                                
                                <input type={(!cpassShow ? "password":"text")} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Enter Your Conform Password ' />
                                <div className="showpass" onClick={()=>setcPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" :"Hide"}
                                </div>
                            </div>
                        </div>
                    <button className='btn' onClick={addUserdata}>Sign UP</button>
                    <p>Already Have An Account <NavLink to="/">Login</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Register;
