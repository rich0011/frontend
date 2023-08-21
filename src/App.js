import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Home from './components/Home';
import Statistics from './components/WeatherStatistics';
import RouteStatistics from './components/RouteStatistics';
import WeatherForcast from './components/WeatherForcast';
import IceService from './components/IceService';
import './components/LoginForm.css';


function App() {


  return (
    // <div className="app">
          <Router>
            <Routes>
                <Route path="/" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/home" element={<Home />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/route" element={<RouteStatistics />} />
                <Route path="/forcast" element={<WeatherForcast />} />
                <Route path="/service" element={<IceService />} />
            </Routes>
        </Router>
    // </div>
  );
}

export default App;

