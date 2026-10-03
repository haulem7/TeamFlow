import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/signup", formData);

      setMessage(response.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold">
            Team<span className="text-blue-500">Flow</span>
          </Link>

          <h1 className="mt-6 text-2xl font-semibold">
            Create your account
          </h1>

          <p className="mt-2 text-slate-400">
            Start managing your projects with TeamFlow.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            {message && (
              <p className="rounded-lg bg-slate-800 px-4 py-3 text-sm text-slate-300">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
            >
              Create account
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;