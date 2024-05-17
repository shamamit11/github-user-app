import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { User } from '../interfaces/user';

interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <div className="user-card max-w-sm rounded-md overflow-hidden shadow-lg m-4">
      <img className="w-full aspect-square object-fill" src={user.avatar_url} alt={user.login} />
      <div className="px-3 py-3 flex items-center justify-between">
        <div className="font-bold text-md">{user.login}</div>
        <button className="delete-button bg-red-500 hover:bg-red-700 text-white py-2 px-2 rounded" onClick={handleDelete} aria-label={`Delete user ${user.login}`}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default UserCard;