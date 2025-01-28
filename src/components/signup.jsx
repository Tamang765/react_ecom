import axios from "axios";
import { X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../redux/slice/authSlice";

const SignUp = ({ close }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    address: "",

  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
  const response =  await axios.post("http://localhost:9000/v1/api/user/register", userData);
  console.log(response)
  if(response.data.user){
    toast.success("Registered successfully");
    close(false);
  }
  }

  return (
    <form
      className="flex flex-col gap-4 p-4 border-2 rounded-md shadow-2xl w-96"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between">
        <h1 className="w-full text-3xl font-bold text-center">Sign Up</h1>
        <X onClick={() => close(false)} />
      </div>
      <label htmlFor="name">Name</label>
      <input
        className="pl-2 text-black border-2"
        type="text"
        name="name"
        id="name"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <label htmlFor="email">Email</label>{" "}
      <input
        className="pl-2 text-black border-2"
        type="email"
        name="email"
        id="email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
                  <label htmlFor="name">Phone</label>
      <input
        className="pl-2 text-black border-2"
        type="number"
        name="phone"
        id="phone"
        value={userData.phone}
        onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
      />
      <label htmlFor="name">Address</label>
      <input
        className="pl-2 text-black border-2"
        type="text"
        name="address"
        id="address"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, address: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="pl-2 text-black border-2"
        type="password"
        name="password"
        id="password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <label htmlFor="cpassword">Confirm Password</label>
      <input
        className="pl-2 text-black border-2"
        type="password"
        name="cpassword"
        id="cpassword"
        value={userData.cpassword}
        onChange={(e) =>
          setUserData({ ...userData, cpassword: e.target.value })
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;

export function Login({ close }) {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    dispatch(loginUser(userData));
  }
  return (
    <div>
      <form
        className="flex flex-col gap-4 p-4 border-2 rounded-md shadow-2xl w-96"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <h1 className="w-full text-3xl font-bold text-center">Log In</h1>
          <X onClick={() => close(false)} />
        </div>
        <label htmlFor="email">Email</label>{" "}
        <input
          className="pl-2 text-black border-2"
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          className="pl-2 text-black border-2"
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
