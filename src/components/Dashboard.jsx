import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions';
import User from './User';
import { Link } from 'react-router-dom';
import { FaUser, FaUserCircle } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import '../index.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleOnClick = () => {
    setShowUsers(!showUsers);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-900 flex items-center">
          <HiOutlineUserGroup className="text-5xl mr-4"/> Social Media Dashboard
        </h1>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105" 
          onClick={handleOnClick}
        >
          <FaUserCircle className="inline mr-2"/> Get All Users
        </button>
      </header>

      {showUsers && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map(user => (
            <div key={user.id} className="bg-white shadow-lg border rounded-lg p-6 flex flex-col items-start">
              <div className="flex items-center mb-4 w-full">
                <FaUser className="text-4xl text-blue-600 mr-4"/>
                <div className="flex-1">
                  <User user={user} />
                </div>
              </div>
              <Link 
                to={`/analytics/${user.id}`} 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold p-2 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full text-center mt-auto"
              >
                Get Analytics of User
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
