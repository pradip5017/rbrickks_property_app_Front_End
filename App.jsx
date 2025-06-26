// import React from "react";
import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar"; // ✅ only one declaration
import ProtectedRoute from "./components/ProtectedRoute";



// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostProperty from "./pages/PostProperty";
import EditProperty from "./pages/EditProperty";
import MyProperties from "./pages/MyProperties";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/post-property" element={
          <ProtectedRoute>
            <PostProperty />
          </ProtectedRoute>
        } />

        <Route path="/edit-property/:id" element={
          <ProtectedRoute>
            <EditProperty />
          </ProtectedRoute>
        } />

        <Route path="/my-properties" element={
          <ProtectedRoute>
            <MyProperties />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App
