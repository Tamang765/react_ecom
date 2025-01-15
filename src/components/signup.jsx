import { X } from "lucide-react";
import React, { useState } from "react";

const SignUp = ({ close }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
  }

  return (
    <form
      className="flex flex-col gap-4 w-96  p-4 shadow-2xl rounded-md border-2"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-center w-full">Sign Up</h1>
        <X onClick={() => close(false)} />
      </div>
      <label htmlFor="name">Name</label>
      <input
        className="border-2 pl-2 text-black"
        type="text"
        name="name"
        id="name"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <label htmlFor="email">Email</label>{" "}
      <input
        className="border-2 pl-2 text-black"
        type="email"
        name="email"
        id="email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="border-2 pl-2 text-black"
        type="password"
        name="password"
        id="password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <label htmlFor="cpassword">Confirm Password</label>
      <input
        className="border-2 pl-2 text-black"
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
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
  }
  return (
    <div>
      <form
        className="flex flex-col gap-4 w-96  p-4 shadow-2xl rounded-md border-2"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-center w-full">Log In</h1>
          <X onClick={() => close(false)} />
        </div>
        <label htmlFor="email">Email</label>{" "}
        <input
          className="border-2 pl-2 text-black"
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          className="border-2 pl-2 text-black"
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
