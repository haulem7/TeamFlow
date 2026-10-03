import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-slate-800 bg-slate-900">

        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <Link to="/" className="text-2xl font-bold">
            Team<span className="text-blue-500">Flow</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium"
          >
            <span>⌂</span>
            Dashboard
          </Link>

          <Link
            to="/projects"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <span>▣</span>
            Projects
          </Link>

          <Link
            to="/tasks"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <span>✓</span>
            Tasks
          </Link>

          <Link
            to="/team"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <span>♙</span>
            Team
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <span>⚙</span>
            Settings
          </Link>

        </nav>

        {/* User */}
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {user?.name || "User"}
              </p>

              <p className="truncate text-xs text-slate-500">
                {user?.email || "user@example.com"}
              </p>
            </div>

          </div>
        </div>

      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">

        {/* Top bar */}
        <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-6">

          <div>
            <h1 className="text-xl font-semibold">
              Dashboard
            </h1>

            <p className="text-sm text-slate-500">
              Overview of your workspace
            </p>
          </div>

          <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800">
            Notifications
          </button>

        </header>

        {/* Dashboard content */}
        <div className="p-6">

          {/* Welcome */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold">
              Welcome back, {user?.name?.split(" ")[0] || "User"} 👋
            </h2>

            <p className="mt-2 text-slate-400">
              Here's what's happening with your projects today.
            </p>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">
                Total Projects
              </p>

              <p className="mt-3 text-3xl font-bold">
                12
              </p>

              <p className="mt-2 text-xs text-green-400">
                +2 this month
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">
                Active Tasks
              </p>

              <p className="mt-3 text-3xl font-bold">
                24
              </p>

              <p className="mt-2 text-xs text-blue-400">
                8 due this week
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">
                Team Members
              </p>

              <p className="mt-3 text-3xl font-bold">
                8
              </p>

              <p className="mt-2 text-xs text-slate-400">
                Across 4 projects
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">
                Completed
              </p>

              <p className="mt-3 text-3xl font-bold">
                68%
              </p>

              <p className="mt-2 text-xs text-green-400">
                +12% this month
              </p>
            </div>

          </section>

          {/* Bottom section */}
          <section className="mt-8 grid gap-6 lg:grid-cols-2">

            {/* Recent Projects */}
            <div className="rounded-xl border border-slate-800 bg-slate-900">

              <div className="flex items-center justify-between border-b border-slate-800 p-5">
                <h3 className="font-semibold">
                  Recent Projects
                </h3>

                <Link
                  to="/projects"
                  className="text-sm text-blue-500 hover:text-blue-400"
                >
                  View all
                </Link>
              </div>

              <div className="divide-y divide-slate-800">

                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-medium">
                      TeamFlow
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      8 tasks remaining
                    </p>
                  </div>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-medium">
                      Mobile App
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      14 tasks remaining
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                    In Progress
                  </span>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-medium">
                      Marketing Website
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      3 tasks remaining
                    </p>
                  </div>

                  <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                    Review
                  </span>
                </div>

              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl border border-slate-800 bg-slate-900">

              <div className="border-b border-slate-800 p-5">
                <h3 className="font-semibold">
                  Recent Activity
                </h3>
              </div>

              <div className="divide-y divide-slate-800">

                <div className="p-5">
                  <p className="text-sm">
                    <span className="font-medium">
                      Alex
                    </span>{" "}
                    completed a task
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    10 minutes ago
                  </p>
                </div>

                <div className="p-5">
                  <p className="text-sm">
                    <span className="font-medium">
                      Sarah
                    </span>{" "}
                    created a new project
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    1 hour ago
                  </p>
                </div>

                <div className="p-5">
                  <p className="text-sm">
                    <span className="font-medium">
                      David
                    </span>{" "}
                    commented on a task
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    3 hours ago
                  </p>
                </div>

              </div>
            </div>

          </section>

        </div>
      </main>

    </div>
  );
};

export default Dashboard;