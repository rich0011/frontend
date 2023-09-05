import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../Home/Home'
import Charts from '../Charts/Charts'
import LocationMap from '../LocationMap/LocationMap'
import WeatherData from '../WeatherData/WeatherData'
import WeatherServices from '../WeatherServices/WeatherServices'
import Account from '../Accounts/Account'
import LoginHome from '../Accounts/LoginHome'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Account />} />
        <Route path='/home' element={<Home />} />
        <Route path='about' element={<h1>About</h1>} />
        <Route path='/charts' element={<Charts />} />
        <Route path='/locations' element={<LocationMap />} />
        <Route path='/weather' element={<WeatherData />} />
        <Route path='/services' element={<WeatherServices />} />
        <Route path='/login' element={<LoginHome />} />

        {/* <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/charts" element={<Charts />} />
            <Route exact path="/locations" element={<LocationMap />} />
            <Route exact path="/weather" element={<WeatherData />} />
            <Route exact path="/services" element={<WeatherServices />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
