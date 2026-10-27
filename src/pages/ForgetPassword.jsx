import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContextValue";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        setTimeout(()=>{
                window.open('https://mail.google.com/mail/u/0/#inbox', '_blank');
            }, 2000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send reset email!");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-5">
      <Helmet>
        <title>Forget-Password - GameHub</title>
      </Helmet>
      <div className="card bg-base-100 p-6 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-5">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Reset Email
          </button>
        </form>
        <p className="mt-3 text-center">
          <Link to="/login" className="text-blue-500 link">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
