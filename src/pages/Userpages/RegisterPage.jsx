import React,{useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://127.0.0.1:8000/register/', {
          username,
          email,
          password,
        });
        console.log(response)
        
        toast("Successfully User Created")
        if (response.status == 201) {
          navigate('/login');
        } else {
          navigate('/register');
        }
      } catch (err) {
        toast(`Register Failed due to  failed ${err}`);
      }
    };
  return (
    <>
    <section className="bg-[url('/img/cover.png')] py-10 font-poppins relative  bg-cover bg-center bg-no-repeat w-full flex items-center justify-center lg:block ">
    <div class="absolute inset-0 bottom-0 bg-gradient-to-r from-blue-900 to-sky-900 opacity-70"></div>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 z-10">
      <Link to="/" className="flex items-center mb-6 text-4xl font-bold text-white dark:text-white text-shadow-sm shadow-black z-10">
          <img className="w-8 h-8 mr-2 rounded-full animate-bounce" src="/img/logo.jpg" alt="logo"/>
          Eagle Trend    
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 z-10
      ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary text-center uppercase md:text-2xl dark:text-white z-10">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                      <label for="username" className="block mb-2 text-sm font-medium text-secondary dark:text-white">Your Username</label>
                      <input type="text" 
                      name="username" 
                      id="username" 
                      value={username}
                    onChange={(e)=> setUsername(e.target.value) }
                      className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                  </div> 
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-secondary dark:text-white">Your email</label>
                      <input 
                      type="email"
                       name="email" 
                       id="email" 
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)}
                       className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-secondary dark:text-white">Password</label>
                      <input type="password" name="password" 
                      id="password"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium text-secondary dark:text-white">Confirm password</label>
                      <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-secondary hover:underline dark:text-primary-500" to="#">Terms and Conditions</Link></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/login" className="font-medium text-secondary hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

    </>
  )
}

export default RegisterPage