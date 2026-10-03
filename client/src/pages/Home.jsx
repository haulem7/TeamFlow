import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Team<span className="text-blue-500">Flow</span>
        </h1>

        <p className="mt-4 mb-8 text-slate-400">
          Manage your team. Ship better projects.
        </p>

        <Link to='/signup' className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700 transition">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;