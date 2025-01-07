import { useState } from "react";
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
      toast.error(`Registration failed: ${axios.isAxiosError(err) && err.response?.data?.message ? err.response.data.message : "An error occurred"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('/img/cover.png')] bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-8 lg:p-12  relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-sky-900 opacity-70"></div>
      <div className="z-10 w-full max-w-md space-y-8">
        <div>
          <Link to="/" className="flex items-center justify-center mb-6">
            <img src="/img/logo.jpg" alt="logo" className="w-10 h-10 mr-2 rounded-full animate-bounce" />
            <span className="text-3xl font-bold text-white">Eagle Trend</span>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-white">Create an Account</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white shadow-md rounded-lg px-4 py-6 sm:px-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" required className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I accept the{" "}
              <Link to="#" className="text-primary hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <div>
            <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              {loading ? "Creating Account..." : "Create an Account"}
            </button>
          </div>
          <p className="mt-2 text-center text-sm text-black">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
