import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    return (
        <nav className="bg-blue-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">Social Media Dashboard</div>
                <div>
                    <Link to="/" className="text-white mr-4">Home</Link>
                    <Link to="/users" className="text-white">Users</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
