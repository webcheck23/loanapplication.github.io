import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ApplyLoan = () => {
  return (
    <>
      <Header></Header>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/thankyou.png"
            alt="Card"
            height={75}px
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Thanks for Applying</h5>
             
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ApplyLoan;
