import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../App';

const Auth = () => {
  return (
    <div className="flex justify-around items-center h-screen gap-6 bg-gray-900 text-white">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const logindata = await axios.post(`${BASE_URL}/auth/login` , {
        username,
        password
      });
      setCookies('access_token', logindata.data.token);
      window.localStorage.setItem("userId", logindata.data.userID);
      navigate('/');
    } catch (err) {
      alert("Login is not successful");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-[400px] w-[400px] p-4 rounded-md bg-gray-300 bg-opacity-50 backdrop-blur-md">
      <form className="flex flex-col justify-center items-center w-full gap-8">
        <h2 className="text-lg font-semibold mb-4">LOGIN</h2>
        <div className="w-full">
          <label htmlFor='username' className="block mb-2">Username:</label>
          <input
            type="text"
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-400 rounded-md p-2 w-full focus:outline-none  text-black"
          />
        </div>
        <div className="w-full">
          <label htmlFor='password' className="block mb-2">Password:</label>
          <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-md p-2 w-full focus:outline-none  text-black"
          />
        </div>
        <div className='w-full'>
          <button type='submit' className='w-[90px] bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none' onClick={(e) => handleLogin(e)}>Login</button>
        </div>
      </form>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/auth/register`, {
        username,
        password
      });
      alert("Registration is successful");
      setUsername('');
      setPassword('');
    } catch (err) {
      alert("Registration is not successful");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-[400px] w-[400px] p-4 rounded-md bg-gray-300 bg-opacity-50 backdrop-blur-md">
      <form className="flex flex-col justify-center items-center w-full gap-8">
        <h2 className="text-lg font-semibold mb-4">Register</h2>
        <div className="w-full">
          <label htmlFor='username' className="block mb-2">Username:</label>
          <input
            type="text"
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-400 rounded-md p-2 w-full focus:outline-none text-black"
          />
        </div>
        <div className="w-full">
          <label htmlFor='password' className="block mb-2">Password:</label>
          <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-md p-2 w-full focus:outline-none  text-black"
          />
        </div>
        <div className='w-full'>
          <button type='submit' className='w-[90px] bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none' onClick={(e) => handleRegister(e)}>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
