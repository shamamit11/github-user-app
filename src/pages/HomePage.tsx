import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='mb-10'>
        <img src={reactLogo} className="logo react" alt="React logo" width={100} />
      </div>
      <h1 className="text-3xl font-bold mb-4">Welcome to GitHub User App</h1>
      <Link to="/users" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        View Users
      </Link>
    </div>
  );
};