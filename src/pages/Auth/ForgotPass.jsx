import React, { useState, useTransition } from "react";
import logo from "../../assets/logo.svg";
import women from "../../assets/women.svg";
import ForgotPassword from "../../components/Auth/ForgotPass"; 

const ForgotPass = () => {

  const [email, setEmail] = useState("");

  return (
    <div className="flex gap-6 mx-auto min-h-screen font-Inter ">
      {/* left content  */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center">
        {/* logo section  */}
        <div>
          <div className=" absolute top-0 left-0 m-5">
            <img src={logo} alt="a animate picture" />
          </div>

          {/* import here other components of authentication */}


          {/* <div className="max-w-md  mx-auto px-4 lg:px-0">
            <h1 className="text-[1.75rem] md:text-[2rem] font-medium text-textClr ">
              Forgot password
            </h1>
            <p className="text-[1.25rem] text-[#999999] leading-5 mt-3">
              Please enter your email to reset the password
            </p>
            <form className="mt-6">
              
              <div>
                <label className="block mb-1 font-Inter font-medium text-textClr">
                  Your Email
                </label>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder={t("auth.placeholder.email")}
                    className=" outline-none flex-1 text-gray-800"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <button
                
                type="submit"
                className="signIn_submit"
              >
                Reset Password
              </button>
            </form>
          </div> */}
          <ForgotPassword />
        </div>
      </div>
      {/* right section  */}
      <div className="bg-Primary w-1/2 hidden md:flex items-center justify-center">
        <img src={women} alt="A men image " className="hidden md:block" />
      </div>
    </div>
  );
};

export default ForgotPass;
