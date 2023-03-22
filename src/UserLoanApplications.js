import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const UserLoanApplications = () => {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState(1);
    const [offersUrl, setoffersUrl] = useState("");
    
    useEffect(() => {
        const getLoanApplications = async () => {
          
          const response = await fetch("https://api.sfd.interview.ovckd.dev/v1/user/applications", {
            mode: 'cors', 
            crossOrigin: true,
            headers: {
              'Authorization': '1251a1de9906a858d1fc697792a5f5a7065a5fe984a159b1d3c3bbea160aa39b',
              'User-Agent' : 'My-App',
              'Accept': '*/*',
            },
          });            

          if(response.ok)
          {
            setData(await response.clone().json());
          }
          else
          {           
          }         
        };
    
        getLoanApplications();
      }, []);

      const ShowLoanApplications = () => {
        return (
          <>
            {
            data.sort(function(a,b){
                return a.interest_rate - b.interest_rate;
            }).map((app) => {
              return (
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                  <div className="card text-center h-100" >
                    <img
                      className="card-img-top p-3"
                      src="./assets/LoanApplication.jpg"
                      alt="Card"
                      height={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                      University: {app.university}
                      </h5>
                      <p className="card-text">
                      Loan Amount: {app.loan_amount}
                      </p>                     
                    </div>
                    <div className="card-body">
                      <Link to={"/LoanOffers/" + userId} className="btn btn-dark m-1">
                        View Offers
                      </Link>                    
                    </div>
                  </div>
                </div>
    
              );
            })}
          </>
        );
      };

      return (
        <>
          <Header></Header>
          <div className="container my-3 py-3">
            <div className="row">
              <div className="col-12">
                <h2 className="display-5 text-center">Loan Applications</h2>
                <hr />
              </div>
            </div>
            <div className="row justify-content-center">
              {<ShowLoanApplications/>}
            </div>
          </div>
          <Footer></Footer>
        </>
      );

}

export default UserLoanApplications;