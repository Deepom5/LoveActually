
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header "
        style={{
          backgroundImage:
            "url(" + require("assets/img/contact-and-information-EVWR64H.jpg") + ")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundColor:"#D3D3D3",height:"25vh !important" 
        }}
      >
        <div className="filter" />
        
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
       
      </div>
    </>
  );
}

export default IndexHeader;
