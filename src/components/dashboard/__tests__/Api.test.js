import React from 'react';
import { render, screen } from '@testing-library/react';
import Api from '../Api';

describe('Api component', () => {
    it('should render the component', () => {
        render(<Api />);
        const apiDetailPage = screen.getByText(/API Detail Page/i);
        expect(apiDetailPage).toBeInTheDocument();
    });

    it('should copy the access token when the copy button is clicked', async () => {
        render(<Api />);
        const copyButton = screen.getByTestId('copy-button');
        const mockCopyItem = jest.fn();
        Object.assign(navigator, {
            clipboard: {
                writeText: mockCopyItem,
            },
        });
        await act(async () => {
            fireEvent.click(copyButton);
        });
        expect(mockCopyItem).toHaveBeenCalled();
    });
});
