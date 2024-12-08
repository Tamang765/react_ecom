import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, {all} from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Define the error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        email,
        password,
      });
      
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('username', response.data.username);
      let usersrole = response.data.role ;
      let allrole = usersrole ? 'user' : "admin";
      localStorage.setItem('role', allrole)
      toast("Successfully Login")
      if (allrole == 'user') {
        navigate('/');
      } else {
        navigate('/etrendadmin');
      }
    } catch (err) {
    setError('Email or password is invalid. '); // Set the error state
      toast('Login failed. Please try again.');
    }
  };


    return (
        <>
            <section className="bg-[url('/img/cover.png')] dark:bg-gray-900 bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center lg:block font-poppins">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-sky-900 opacity-70"></div>
                <div className="relative flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                    <Link to="/" className="flex items-center mb-6 text-4xl font-bold text-white dark:text-transparent text-shadow-sm shadow-black">
                        <img className="w-8 h-8 lg:mr-5 mr-3 rounded-full animate-bounce" src="/img/logo.jpg" alt="logo" />
                        Eagle Trend
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                            <h1 className="text-xl text-center uppercase font-bold leading-tight tracking-tight text-secondary md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary dark:text-white">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}  // Bind email state
                                        onChange={(e) => setEmail(e.target.value)} // Update email state
                                        className="bg-gray-50 border border-s-light text-secondary rounded-lg focus:ring-secondary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-secondary"
                                        placeholder="name@gmail.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondary dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}  // Bind password state
                                        onChange={(e) => setPassword(e.target.value)} // Update password state
                                        className="bg-gray-50 border border-gray-300 text-secondary rounded-lg focus:ring-secondary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-secondary rounded bg-gray-50 focus:ring-3 focus:ring-secondary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-secondary dark:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="#" className="text-sm font-medium text-secondary hover:underline dark:text-primary-500">Forgot password?</Link>
                                </div>
                                <button
                                    type="submit"  // Ensure the button is of type submit
                                    className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/register" className="font-medium text-secondary hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
