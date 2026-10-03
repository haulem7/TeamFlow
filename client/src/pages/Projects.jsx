import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Planning",
  });

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");

      setProjects(response.data.projects);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to load projects"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await api.post("/projects", formData);

      setProjects([
        response.data.project,
        ...projects,
      ]);

      setFormData({
        name: "",
        description: "",
        status: "Planning",
      });

      setMessage("Project created successfully!");
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to create project"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <Link
              to="/dashboard"
              className="text-2xl font-bold"
            >
              Team<span className="text-blue-500">Flow</span>
            </Link>

            <p className="mt-1 text-sm text-slate-500">
              Projects
            </p>
          </div>

          <Link
            to="/dashboard"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
          >
            ← Dashboard
          </Link>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Your Projects
          </h1>

          <p className="mt-2 text-slate-400">
            Create and manage your projects from one place.
          </p>
        </div>

        {/* Create Project */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-5 text-lg font-semibold">
            Create a new project
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 md:grid-cols-2"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Project name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. TeamFlow"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
              >
                <option value="Planning">
                  Planning
                </option>

                <option value="Active">
                  Active
                </option>

                <option value="Completed">
                  Completed
                </option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-slate-400">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="What is this project about?"
                rows="3"
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
              >
                + Create Project
              </button>
            </div>

          </form>

          {message && (
            <p className="mt-4 rounded-lg bg-slate-800 px-4 py-3 text-sm text-slate-300">
              {message}
            </p>
          )}

        </div>

        {/* Projects */}
        <div>
          <h2 className="mb-5 text-lg font-semibold">
            All Projects
          </h2>

          {loading ? (
            <p className="text-slate-500">
              Loading projects...
            </p>
          ) : projects.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center">
              <p className="text-slate-400">
                You don't have any projects yet.
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Create your first project above.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {projects.map((project) => (
                <div
                  key={project._id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-slate-700"
                >

                  <div className="flex items-start justify-between gap-4">

                    <h3 className="text-lg font-semibold">
                      {project.name}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/10 text-green-400"
                          : project.status === "Active"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>

                  </div>

                  <p className="mt-4 min-h-12 text-sm leading-6 text-slate-400">
                    {project.description ||
                      "No description provided."}
                  </p>

                  <div className="mt-6 border-t border-slate-800 pt-4">
                    <p className="text-xs text-slate-500">
                      Created{" "}
                      {new Date(
                        project.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </main>
    </div>
  );
};

export default Projects;