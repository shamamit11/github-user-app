import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersFailure, fetchUsersStart, fetchUsersSuccess, deleteUser, selectUsers, selectLoading, selectError } from '../redux/userSlice';
import { fetchGitHubUsers } from '../services/api';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import UserCard from '../components/UserCard';
import { URL } from '../utils/constants';
import Loading from '../components/Loading';
import ErrorContainer from '../components/ErrorContainer';

export const UsersPage: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsersStart());
        fetchGitHubUsers()
            .then((data) => dispatch(fetchUsersSuccess(data)))
            .catch((error) => dispatch(fetchUsersFailure(error.message)));
    }, [dispatch]);

    const handleDeleteUser = (userId: number) => {
        dispatch(deleteUser(userId));
    };

    if (loading) {
        return <Loading />
    }

    if (error) {
        return (
            <ErrorContainer message={error} />
        )
    }

    return (
        <div className="container mx-auto">
            <header className="flex py-4 mx-3 items-center">
                <FaArrowLeft className='mr-3 cursor-pointer' onClick={() => navigate(URL.HOME)} />
                <h1 className="text-3xl font-bold m-0">GitHub Users</h1>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {users.map((user: any) => (
                    <UserCard key={user.id} user={user} onDelete={() => handleDeleteUser(user.id)} />
                ))}
            </div>
        </div>
    );
};