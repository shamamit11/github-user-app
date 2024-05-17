import { render, screen } from '@testing-library/react';
import ErrorContainer from '../../src/components/ErrorContainer';

describe('Error', () => {
    it('should render Error Message when error is passed', () => {
        const errMessage = "Error Fetching Data !";

        render(<ErrorContainer message={errMessage} />);

        //screen.debug();
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(errMessage);
    });
})