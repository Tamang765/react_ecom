import React, { useState } from "react";

const Login = () => {
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
      className="flex flex-col border-2 p-8 max-w-xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold">Login Page</h1>
      <label htmlFor="name">Name</label>
      <input
        className="border-2 pl-2"
        type="text"
        name="name"
        id="name"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <label htmlFor="email">Email</label>{" "}
      <input
        className="border-2 pl-2"
        type="email"
        name="email"
        id="email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="border-2 pl-2"
        type="password"
        name="password"
        id="password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <label htmlFor="cpassword">Confirm Password</label>
      <input
        className="border-2 pl-2"
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

export default Login;
