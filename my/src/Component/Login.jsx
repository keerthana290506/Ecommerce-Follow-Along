import { useState } from "react";
import { Link } from "react-router-dom"; // Link for routing to signup page
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Icons for visibility toggle

export const Login = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [visible, setVisible] = useState(false); // State for visibility of password

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    console.log("Email:", email);
    console.log("Password:", password);
    // Add further logic for handling login here (e.g., API call)
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          LOGIN
        </h2>
      </div>

      <div className="mt-8 sm:max-w-sm sm:w-full mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mt-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input with Visibility Toggle */}
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="mt-2 relative">
            <input
              id="password"
              name="password"
              type={visible ? "text" : "password"} // Toggle password visibility
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setVisible(!visible)} // Toggle visibility
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {/* Show or hide icon based on visibility state */}
              {visible ? (
                <AiOutlineEyeInvisible className="h-5 w-5" /> // EyeInvisible icon for hiding password
              ) : (
                <AiOutlineEye className="h-5 w-5" /> // Eye icon for showing password
              )}
            </button>
          </div>

          {/* Link to Signup page */}
          <div className="mt-2 text-center">
            <p className="text-sm text-gray-600">
              Dont have an account yet?{" "}
              <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link>
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
