import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';


import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" 
        element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } 
        />
        <Route path="/projects" element={
          <ProtectedRoute> <Projects /></ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;