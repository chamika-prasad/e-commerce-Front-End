import 'bootstrap/dist/css/bootstrap.css';
import { type } from 'os';
import logo from "./../assets/images/logo.png";
import './SIgnUpInNavBar.css';

type SIgnUpInNavBarProps = 
{
    title : string
    action : string
}
export default function SIgnUpInNavBar(props : SIgnUpInNavBarProps) {

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
                            <form>
                                <div className="form-outline mb-4 ">
                                     <input type="email" id="form3Example3cg" className="form-control form-control-lg " placeholder='Email' />
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="form3Example4cg" className="form-control form-control-lg col-xs-4" placeholder='Password'/>
                                </div>

                                <div className="form-outline mb-4">
                                    <button type="button" className="btn btn-success btn-block btn-lg w-100">{props.title}</button>
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
