import React from "react";
import authBG from "../assets/authBG.png";
const Verify = () => {
  return (
    <section className="flex flex-col w-full h-screen md:flex-row">
      <div className="flex flex-col md:w-2/5 md:h-full items-center md:items-start pt-3 xl:px-40 md:px-4">
        <div className="flex items-center gap-2 pb-4">
          <img src="/logo.png" alt="" className="h-10" />
          <h1 className="text-3xl font-semibold">
            <span className="text-[#156936]">Stay</span>Side
          </h1>
        </div>
        <h2 className="font-semibold md:text-2xl">Verify your email</h2>
        <div>
          <p className="text-[#666972] mt-2 md:text-sm text-xs">
          We've sent a verification code to
        </p>
        <p></p>
        <p>Enter the code below to verify your email address</p>
        </div>
        <div>
          <p>Verification Code</p>
          <div>
            <input type="number" /><input type="number" /><input type="number" /><input type="number" /><input type="number" /><input type="number" />
          </div>
          
        </div>
      </div>


      <div
        className="hidden md:flex md:flex-col items-center pe-8 md:w-3/5 md:h-full text-3xl text-white pt-9"
        style={{
          backgroundImage: `url(${authBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col ">
          <div>
            <div></div>
            <div></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Verify;
