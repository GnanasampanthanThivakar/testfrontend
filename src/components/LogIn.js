import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { FaArrowLeft } from 'react-icons/fa';

function LogIn() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const admin = {
      Email: "Admin@gmail.com",
      Password: "123456"
    };

    const newLogIn = {
      Email: email,
      Password: password
    };

    try {
      const adminResponse = await axios.post("http://localhost:8070/webuser/get/login", admin);
      if (adminResponse.status === 200) {
        if (email === admin.Email && password === admin.Password) {
          setUser({ Email: email, Password: password });
          console.log("Admin logged in");
          navigate("/Admindash");
          return;
        }
      }
      const userResponse = await axios.post("http://localhost:8070/webuser/get/login", newLogIn);
      if (userResponse.status === 200) {
        const responseData = userResponse.data;
        if (responseData === "exist") {
          setUser({ Email: email, Password: password });
          navigate("/Cusdash");
          return;
        } else if (responseData === "notexist") {
          console.log("Invalid login");
          alert("You haven't signed up");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative p-4" 
         style={{ backgroundImage: "url('./Images/wedding-background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm"></div>
      <div className="absolute top-6 left-6 z-20">
        <Link to="/" className="flex items-center text-ivory font-bold hover:text-gold transition duration-300">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="bg-[#FFFAF0] bg-opacity-95 p-12 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-[#1A2A40] mb-8">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[#1A2A40] text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-[#1A2A40] text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition duration-300"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D32F2F] hover:bg-[#FF0000] text-[#FFFAF0] font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105"
            >
              Log In
            </button>
          </form>
          <div className="mt-8 text-center text-[#757575] text-sm">
            <p>2023 © ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
