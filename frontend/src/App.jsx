import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Splashscreen from "./pages/splashscreen/splashscreen";
import Login from "./pages/Login/Login";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <Router>
      <Routes>
        {/* 1. Splash Screen Logic */}
        <Route 
          path="/" 
          element={
            !started ? (
              <Splashscreen onStart={() => setStarted(true)} />
            ) : (
              <Navigate to="/login" /> // Redirect to login once "Get Started" is clicked
            )
          } 
        />

        {/* 2. Login Route */}
        <Route path="/login" element={<Login />} />

        {/* 3. Dashboard Route (Where users go after logging in) */}
        <Route 
          path="/dashboard" 
          element={
            <div style={{ textAlign: "center", marginTop: "50px", color: "#1e3a5f" }}>
              <h1>Welcome to My Budget Dashboard 💰</h1>
              <p>Your financial journey starts here.</p>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;