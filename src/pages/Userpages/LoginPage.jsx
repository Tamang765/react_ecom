import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        email,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("username", response.data.username);
      let usersrole = response.data.role;
      let allrole = usersrole ? "user" : "admin";
      localStorage.setItem("role", allrole);
      toast("Successfully Login");
      if (allrole === "user") {
        navigate("/");
      } else {
        navigate("/etrendadmin");
      }
    } catch (err) {
      setError("Email or password is invalid.");
      toast("Login failed. Please try again.");
    }
  };

  return (
    <section className=" relative min-h-screen flex items-center justify-center bg-[url('/img/cover.png')] bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-sky-900 opacity-70"></div>
      <div className="z-10 w-full max-w-md space-y-8">
        <div>
          <Link to="/" className="flex items-center justify-center mb-6">
            <img src="/img/logo.jpg" alt="logo" className="w-10 h-10 mr-2 rounded-full animate-bounce" />
            <span className="text-3xl font-bold text-white">Eagle Trend</span>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-white">Sign in to your Account</h2>
        </div>

        <form className="mt-8 space-y-6 bg-white shadow-md rounded-lg px-4 py-6 sm:px-8" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary">
              Email
            </label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 text-secondary rounded-lg focus:ring-secondary focus:border-primary-600" placeholder="name@gmail.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondary">
              Password
            </label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 text-secondary rounded-lg focus:ring-secondary focus:border-primary-600" placeholder="••••••••" required />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-secondary rounded bg-gray-50 focus:ring-3 focus:ring-secondary" required />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500">
                  Remember me
                </label>
              </div>
            </div>
            <Link to="#" className="text-sm font-medium text-secondary hover:underline">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Sign in
          </button>
          <p className="text-sm font-light text-gray-500 text-center">
            Don't have an account yet?{" "}
            <Link to="/register" className="font-medium text-secondary hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
