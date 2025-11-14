import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

 const [fullName,setFullName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [error,setError]=useState(null);
 const navigate = useNavigate();
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <img src={assets.login_bg} alt="Background" className="absolute inset-0 w-full h-full object-cover filter blur-sm" />
      <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-semibold text-black text-center mb-2">
          Create An Account
        </h3>
        p
      </div>
    </div>
  )
}

export default Signup