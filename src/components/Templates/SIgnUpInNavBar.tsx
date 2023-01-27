import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './SIgnUpInNavBar.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { authActions } from '../../Store';
import { useDispatch } from 'react-redux';


type SIgnUpInNavBarProps = 
{
    title : string
    action : string
}
export default function SIgnUpInNavBar(props : SIgnUpInNavBarProps) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    //const [cookies, setCookie] = useCookies();
    const disPatch = useDispatch()

    const navigate = useNavigate();

    const userOperation = (e:any) => {

        e.preventDefault()

        if(props.title == "SignIn"){

            axios.post(`https://localhost:7225/api/User/Login`,
        { 
            email:`${email}`,
            password:`${password}`,
                    
        }).then((res)=>{
    
        let temp = res.data.state
        let token = res.data.detail.token

    //console.log(res.data)
        if(temp == true){

        Cookies.set('user_email', email)
        Cookies.set('jwt_token', token)

        disPatch(authActions.login())

        
        navigate('/');

        }else{
           alert('Login faild')
           navigate('/');
        }
                 
         }).catch((err)=>{
          console.log(err)
         })

        }else{

            console.log(email)
            console.log(password)

            axios.post(`https://localhost:7225/api/User/Register`,
        { 
            email:`${email}`,
            password:`${password}`,
                    
        }).then((res)=>{
            
            console.log(res)
        let temp = res.data.state

        if(temp == true){

            alert('User registration successfull')
            navigate('/Login');

        }else{
           alert(res.data.message)
        }
                 
         }).catch((err)=>{
          console.log(err)
         })
           
        }
    }

  return (
   
    <div>
        {/* <nav className="navbar  fixed-top navbar-expand-lg navbar-light bg-light">

            <div className="navbar-brand">
                <a href="/"><img className="logo" src={logo}  alt=""/></a>
            </div>

        </nav> */}
                    
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100 pt-5 pb-5">
                <div className="card shadow col-12 col-md-9 col-lg-7 col-xl-6 mt-5 mb-5" >
                    <div className="card-body mx-auto p-5 ">
                        <h2 className="text-uppercase text-center mb-5">{props.title}</h2>
                            <form method='post' onSubmit={(e) => userOperation(e)}>
                                <div className="form-outline mb-4 ">
                                     <input type="email" id="form3Example3cg" className="form-control form-control-lg " placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="form3Example4cg" className="form-control form-control-lg col-xs-4" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <button type="submit" className="btn btn-success btn-block btn-lg w-100">{props.title}</button>
                                </div>                                                                                        
                                        
                                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href={props.action} className="fw-bold text-body"><u>{props.action} here</u></a></p>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
