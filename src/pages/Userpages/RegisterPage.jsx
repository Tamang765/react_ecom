import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:8000/register/", {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        toast.success("User successfully created!");
        navigate("/login");
      } else {
        toast.warn("Registration failed. Please try again.");
      }
    } catch (err) {
      toast.error(`Registration failed: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[url('/img/cover.png')] py-10 font-poppins flex items-center justify-center h-fit relative bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-sky-900 opacity-70"></div>
 
      <div className="z-10 flex flex-col items-center w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <Link to="/" className="flex items-center mb-6 text-3xl font-bold text-secondary">
        <img src="/img/logo.jpg" alt="logo" className="w-10 h-10 mr-2 rounded-full animate-bounce" />
        Eagle Trend
      </Link>
        <h1 className="text-2xl font-bold text-center uppercase text-secondary">Create an Account</h1>
        <form onSubmit={handleSubmit} className="w-full mt-6 space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-secondary">
              Username
            </label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-secondary focus:border-secondary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary">
              Email
            </label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-secondary focus:border-secondary" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-secondary">
              Password
            </label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-secondary focus:border-secondary" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
              Confirm Password
            </label>
            <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-secondary focus:border-secondary" />
          </div>
          <div className="flex items-start">
            <input type="checkbox" id="terms" required className="w-4 h-4 mr-2" />
            <label htmlFor="terms" className="text-sm text-secondary">
              I accept the{" "}
              <Link to="#" className="text-primary underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <button type="submit" disabled={loading} className="w-full py-2 text-white bg-primary rounded-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300">
            {loading ? "Creating Account..." : "Create an Account"}
          </button>
          <p className="text-sm text-center text-secondary">
            Already have an account?{" "}
            <Link to="/login" className="text-primary underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
