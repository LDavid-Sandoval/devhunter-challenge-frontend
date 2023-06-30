import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";
import LoginForm from "./Components/LoginForm/LoginForm.jsx";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import HomeComponent from "./Components/Home/HomeComponent";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomeComponent />} />
          <Route exact path='/login' element={<LoginForm />} />
          <Route exact path='/profile' element={<ProfileComponent />} />
          <Route exact path='/register' element={<RegistrationForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
