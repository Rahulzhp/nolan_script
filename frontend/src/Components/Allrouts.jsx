import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Login from "./Login"
import Pricing from "./Pricing"
import Profile from './Profile'

const Allrouts = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar></Navbar>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/price' element={<Pricing></Pricing>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
        </Routes>
    )
}

export default Allrouts