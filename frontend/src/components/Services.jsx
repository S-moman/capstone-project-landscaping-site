import { useEffect, useState } from "react";
import FooterNav from "./FooterNav";
import NavBar from "./NavBar";
import { BASE_URL } from "./App";

export default function Services({ services }) {
  // useEffect(() => {
  //   const getSevices = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/services`);
  //       const service = await response.json();
  //       setServices(service);
  //       console.log(service);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };
  //   getSevices();
  // }, []);
  function handleClick() {
    
  }

  return (
    <>
      <NavBar />
      <div className="service-container">
        {services.map((service) => (
          <div id="service-card" key={service._id} onClick={handleClick}>
            <h1>{service.service}</h1>
            <p>{service.discription}</p>
          </div>
        ))}
      </div>
      <FooterNav />
    </>
  );
}
