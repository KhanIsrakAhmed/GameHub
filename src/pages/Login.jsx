import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextValue";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then(() => {
        setError("");
        event.target.reset();
        navigate("/");
        toast.success("Login successful!");
      })
      .catch((err) => {
        setError("Invalid email or password");
        console.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success(`Welcome, ${result.user.displayName}!`);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Google login failed!");
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <Helmet>
        <title>Login - GameHub</title>
      </Helmet>

      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Back </h2>
          <p className="text-center font-medium text-gray-500 mb-6">
            Please login to continue
          </p>

          <form onSubmit={handleLogin} className="space-y-4">

            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="label font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
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

    
            <div className="flex justify-between text-sm mt-1">
              <Link
                to="/forgetPassword"
                className="link link-hover text-blue-500"
              >
                Forgot password?
              </Link>
              <p>
                New here?{" "}
                <Link to="/register" className="text-blue-500 link link-hover">
                  Register
                </Link>
              </p>
            </div>

            <button className="btn btn-neutral w-full mt-3">Login</button>
            <div className="divider">OR</div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-info w-full flex items-center gap-2"
            >
              <FcGoogle className="size-6" />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;