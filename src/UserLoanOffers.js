import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserLoanOffers = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getUserOffers = async () => {
          
          const response = await fetch("https://api.sfd.interview.ovckd.dev/v1/user/applications/" + id + "/offers", {
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
    
        getUserOffers();
      }, []);

      const ShowUserOffers = () => {
        return (
          <>
            {
            data.sort(function(a,b){
                return a.interest_rate - b.interest_rate;
            }).map((offer) => {
              return (
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                  <div className="card text-center h-100" >
                    <img
                      className="card-img-top p-3"
                      src={offer.bank_logo}
                      alt="Card"
                      height={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Bank: {offer.bank}
                      </h5>
                      <p className="card-text">
                        Interest: {offer.interest_rate} &nbsp; Tenure: {offer.tenure}
                      </p>                      
                    </div>
                    <div className="card-body">
                      <Link to={"/ApplyLoan"} className="btn btn-dark m-1">
                        Apply
                      </Link>
                      {/* <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                        Add to Cart
                      </button> */}
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
                <h2 className="display-5 text-center">Latest Offers</h2>
                <hr />
              </div>
            </div>
            <div className="row justify-content-center">
              {<ShowUserOffers/>}
            </div>
          </div>
          <Footer></Footer>
        </>
      );

}

export default UserLoanOffers;