import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import DoctorRegistrationForm from "./Pages/DoctorRegistration";
import DoctorLoginForm from "./Components/DoctorLogin";
import Chatbot from "./Components/Chatbot";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/registration" element={<DoctorRegistrationForm />} />
          <Route path="/login" element={<DoctorLoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
