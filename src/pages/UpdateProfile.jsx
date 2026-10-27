import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContextValue";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateProfileInfo } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfileInfo(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update profile!");
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <Helmet>
        <title>Update Profile - GameHub</title>
      </Helmet>

      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-2">Update Profile </h2>
          <p className="text-center text-gray-500 mb-6">
            Keep your profile up to date
          </p>

          <form onSubmit={handleUpdate} className="space-y-4">
        
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="label font-medium">Photo URL</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter photo URL"
              />
            </div>

            <button type="submit" className="btn btn-success w-full mt-2">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;