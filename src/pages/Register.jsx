import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    //  PASSWORD VALIDATION
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      return toast.error("Password must contain lowercase letter");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    toast.loading("Creating user...", { id: "create-user" });

    try {
      const result = await createUser(email, password);

      await updateUserProfile(displayName, photoURL);

      toast.success("User created successfully!", { id: "create-user" });
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: "create-user" });
    }
  };

  const handleGoogleSignIn = async () => {
    toast.loading("Signing in...", { id: "create-user" });

    try {
      const result = await signInWithGoogle();
      console.log(result.user);
      toast.success("User created successfully!", { id: "create-user" });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: "create-user" });
    }
  };

  return (
    <div className="m-10 card bg-base-100 w-full mx-auto max-w-sm shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register</h1>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              required
              className="input rounded-full"
              placeholder="Name"
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input rounded-full"
              placeholder="Photo URL"
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input rounded-full"
              placeholder="Email"
            />

            {/* Password */}

            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                className="input rounded-full"
                placeholder="Password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-8 top-[34px] cursor-pointer z-50 text-gray-600"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
              Register
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5]"
        >
          <FaGoogle />
          Register with Google
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
