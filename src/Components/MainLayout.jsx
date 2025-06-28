import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="pt-20 px-4"> {/* Add top padding for sticky navbar */}
        <Outlet />
      </div>
             <Footer/>
        </div>
    );
};

export default MainLayout;
