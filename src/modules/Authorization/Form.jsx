import React from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { useNavigate } from "react-router-dom";
const Form = ({
    isSignInPage = false
}) => {
  const navigate = useNavigate()
  return <div className="bg-[#d2cfdf] h-screen w-full flex justify-center items-center">
    <div className="h-[600px] w-[800px] bg-white flex justify-center items-center">
        <div className= {`h-full w-full flex flex-col justify-center items-center ${!isSignInPage && 'order-2'}`}>
           <div className="text-3xl">WELCOME {isSignInPage && " BACK"}</div> 
           <div className="mb-[50px]">PLEASE {isSignInPage ? "LOGIN" : 'RESISTER'}</div>

           <form>
            {
                !isSignInPage && 
           <Input label="username" type="username" placeholder="Enter your username" />
            }

            <Input label="email" type="email" placeholder="Enter your email" />
            <Input label="password" type="password" placeholder="Enter your password" />
            <Button label= {!isSignInPage ?"Sign In" : "Register"} />


           </form>
           <div className="cursor-pointer" onClick={() => navigate(`${isSignInPage ? '/account/signup' : '/account/signin'}`)}>
            {
                isSignInPage ? "Create New Account" : "Sign In"
            }
           </div>
        </div>
        <div className={`border h-full w-full bg-gray-400 ${!isSignInPage && 'order-1'}`}></div>
    </div>
  </div>;
};

export default Form;
