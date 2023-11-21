import React from 'react'
import Navbar from '../ui/Navbar'
import Employeeform from '../ui/Employeeform'
import Homepage from '../ui/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const Mainroutes = () => {
    return (
        <div>


            <Router>
                <Navbar />
                <Routes>

                    <Route path="/" element={<Homepage />} />
                    <Route path="/employee" element={<Employeeform />} />

                </Routes>
            </Router>



        </div>
    )
}

export default Mainroutes
