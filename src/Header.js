import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'

const Header = () => {
    
    let componentMounted = true;
    const [healthCheckStatusStyle, setStatusStyle] = useState("badge bg-success");
    const [healthCheckStatus, setStatus] = useState("Health Check Ok");
    const [data, setData] = useState("");
    const [userName, setUser] = useState("Guest");

    useEffect(() => {
        const healthCheck = async () => {
          
          let response = await fetch("https://api.sfd.interview.ovckd.dev/v1/ping", {
            mode: 'cors', 
            headers: {
              'Authorization': '1251a1de9906a858d1fc697792a5f5a7065a5fe984a159b1d3c3bbea160aa39b',
              'User-Agent' : 'My-App',
              'Accept': '*/*',
            },
          });
          
          if(response.ok)
          {       
            setData(await response.json());
            console.log(data.message);     
            
            setStatusStyle("badge bg-success");
            setStatus("Health Check Ok");
          }
          else
          {
            setStatusStyle("badge bg-danger");
            setStatus("Health Check Error");
          }

          let response2 = await fetch("https://api.sfd.interview.ovckd.dev/v1/user", {
              mode: 'cors', 
              headers: {
                'Authorization': '1251a1de9906a858d1fc697792a5f5a7065a5fe984a159b1d3c3bbea160aa39b',
                'User-Agent' : 'My-App',
                'Accept': '*/*',
              },
            });
  
            if(response2.ok)
            {            
                let resp = await response2.json();
                console.log(resp);
                setUser(resp.name);
            }
            else
            {        
                setUser("Guest");      
            }
        };
       
        healthCheck();

      }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">LOAN BAZAAR</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/LoanApplications">Loan Applications</NavLink>
                        </li>                        
                    </ul>
                    <div className="buttons text-center"> 
                        Welcome&nbsp;
                        <span class="badge text-bg-info">{userName}</span>                   
                    </div>                   
                </div>                
            </div>
            
            <span className={healthCheckStatusStyle}>{healthCheckStatus}</span>
        </nav>
    )
}

export default Header;