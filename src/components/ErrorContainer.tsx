import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface ErrorProp {
    message: string;
}

const ErrorContainer: React.FC<ErrorProp> = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='mb-3'>
                <FaInfoCircle size={30} color='red' />
            </div>
            <h3 className="font-bold"> Error: {message}</h3>
        </div>
    )
}

export default ErrorContainer;