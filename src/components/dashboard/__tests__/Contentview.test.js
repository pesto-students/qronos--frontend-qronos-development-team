import React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatabaseContext, UserContext } from '../../context/context';
import Contentview from '../Contentview';

jest.mock('axios');

describe('Contentview', () => {
    const database = { _id: 'database-id' };
    const user = { email: 'test@test.com' };

    beforeEach(() => {
        axios.get.mockResolvedValueOnce({
            data: [{ _id: 'entry-1', title: 'Entry 1', type: 'productType' }],
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should fetch and render entries', async () => {
        render(
            <UserContext.Provider value={{ user }}>
                <DatabaseContext.Provider value={{ database }}>
                    <Contentview />
                </DatabaseContext.Provider>
            </UserContext.Provider>
        );

        await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

        expect(screen.getByText('Entry 1')).toBeInTheDocument();
    });

    it('should delete entries', async () => {
        render(
            <UserContext.Provider value={{ user }}>
                <DatabaseContext.Provider value={{ database }}>
                    <Contentview />
                </DatabaseContext.Provider>
            </UserContext.Provider>
        );

        await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

        axios.delete.mockResolvedValueOnce({});

        const deleteButton = screen.getByRole('button', { name: 'Delete' });

        userEvent.click(deleteButton);

        await waitFor(() => expect(axios.delete).toHaveBeenCalledTimes(1));

        expect(axios.delete).toHaveBeenCalledWith(
            `${process.env.REACT_APP_API_URL}/product/entry-1`,
            { data: { database: 'database-id', email: 'test@test.com' } }
        );
    });
});
