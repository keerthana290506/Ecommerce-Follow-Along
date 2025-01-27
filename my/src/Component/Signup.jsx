import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link for routing to signup page
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Icons for visibility toggle
import { RxAvatar } from "react-icons/rx"; // Add this import for avatar icon
import { MdPerson } from "react-icons/md";
import axios from 'axios'; // Import axios for making HTTP requests

export const Signup = () => {
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [visible, setVisible] = useState(false); // State for visibility of password
  const [avatar, setAvatar] = useState(null); // State for avatar

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Prepare form data to be sent to the server
    const formData = new FormData();
    formData.append("name", name); // Fixed the incorrect field name
    formData.append("email", email); // Fixed the incorrect field name
    formData.append("password", password); // Fixed the incorrect field name
    if (avatar) {
      formData.append("avatar", avatar); // Append avatar if present
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure proper headers for multipart data
      },
    };

    // Send POST request to create a new user
    axios.post("http://localhost:5000/create-user", formData, config)
      .then((res) => {
        console.log(res.data); // Handle the success response
      })
      .catch((error) => {
        console.error(error); // Handle errors if any
      });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  // Handle avatar upload
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const filepath = URL.createObjectURL(e.target.files[0]);
      setAvatar(e.target.files[0]);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign up for an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name input field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Email input field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Password input field */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2 relative">
              <input
                type={visible ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              >
                {visible ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
              </div>
            </div>
          </div>

          {/* Avatar input field */}
          <div>
  <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
    Avatar
  </label>
  <div className="mt-2 flex items-center space-x-4">  {/* Added flex and space-x-4 */}
    {/* Display the avatar preview if there's one */}
    {avatar ? (
      <img
        src={URL.createObjectURL(avatar)}
        alt="avatar"
        className="w-16 h-16 object-cover rounded-full"  // Adjust size of the avatar image
      />
    ) : (
      <RxAvatar className="h-16 w-16 text-gray-300" />  // Adjust size of the default icon
    )}
    {/* File input */}
    <input
      type="file"
      id="avatar"
      name="file-input"
      accept=".jpg, .jpeg, .png"
      onChange={handleFileChange}
      className="mt-2 block text-sm text-gray-700 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300"
    />
  </div>
</div>
        

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
