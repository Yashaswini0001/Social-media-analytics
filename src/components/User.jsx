import React from 'react';
import '../App.css';
import '../index.css';

const User = ({ user }) => {
    return (
        <div className="border p-4 m-2 rounded">
            <h3 className="font-bold">{user.name}</h3>
            <p>{user.bio}</p>
        </div>
    );
};

export default User;
