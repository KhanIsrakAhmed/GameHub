import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextValue";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, updateProfileInfo } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handelRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photoUrl = event.target.photoURL.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must include at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must include at least one lowercase letter");
      return;
    }

    setError("");

    createUser(email, password)
      .then(() => {
        updateProfileInfo(name, photoUrl)
          .then(() => {
            toast.success("Profile updated successfully!");
          })
          .catch((err) => {
            console.error("Profile update error:", err);
            toast.error("Profile update failed!");
          });

        event.target.reset();
        toast.success("Registered Successfully!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <Helmet>
        <title>Register - GameHub</title>
      </Helmet>

      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Create Account </h2>
          <p className="text-center text-gray-500 mb-6">
            Join GameHub and start your journey
          </p>

          <form onSubmit={handelRegister} className="space-y-4">
           
            <div>
              <label className="label font-medium">User Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="label font-medium">Photo URL</label>
              <input
                name="photoURL"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter photo URL"
              />
            </div>

            <div>
              <label className="label font-medium">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

           
            <div>
              <label className="label font-medium">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <p className="text-sm">
              Already have an account?{" "}
              <Link className="text-blue-500 link link-hover" to={"/login"}>
                Login
              </Link>
            </p>

            <button className="btn btn-neutral w-full mt-2">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;