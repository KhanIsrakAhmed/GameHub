import React from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thank you for subscribing!");
  };

  return (
    <div className="max-w-2xl bg-gradient-to-r from-cyan-100 to-blue-100 p-10 rounded-2xl shadow-lg mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
        Subscribe to our Newsletter
      </h2>
      <p className="mb-8 text-gray-600 text-lg">
        Get the latest updates about new games, events, and promotions directly
        in your inbox.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center gap-3"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="input input-bordered w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none hover:opacity-90 transition">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
