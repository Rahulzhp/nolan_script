import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'

const Rotes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navbar></Navbar>}></Route>
            </Routes>
        </div>
    )
}

export default Rotes