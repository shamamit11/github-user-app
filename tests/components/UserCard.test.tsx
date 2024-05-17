import { fireEvent, render, screen } from '@testing-library/react';
import UserCard from '../../src/components/UserCard';
import { User } from '../../src/interfaces/user';

describe('User Card', () => {

    const user: User = {
        id: 1,
        login: 'testuser',
        avatar_url: 'https://picsum.photos/400',
    };

    it('should renders card with user information', () => {
        render(<UserCard user={user} onDelete={() => { }} />);

        const userInfo = screen.getByText(/testuser/i);
        const deleteButton = screen.getByRole('button', { name: /Delete user testuser/i });

        expect(userInfo).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();
    });

    it('should call the onDelete method when delete button is clicked', () => {
        const onDeleteMock = vitest.fn();

        render(<UserCard user={user} onDelete={onDeleteMock} />);

        const deleteButton = screen.getByRole('button', { name: /Delete user testuser/i });
        fireEvent.click(deleteButton);
        expect(onDeleteMock).toHaveBeenCalledWith(user.id);
    })
})