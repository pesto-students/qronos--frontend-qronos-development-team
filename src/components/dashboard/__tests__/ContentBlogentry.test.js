import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { DatabaseContext, UserContext } from '../../context/context';
import { MemoryRouter } from 'react-router-dom';
import ContentEntry from '../ContentEntry';

jest.mock('axios');

const mockDatabase = {
    _id: '1234',
};

const mockUser = {
    email: 'test@test.com',
};

describe('ContentEntry', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            data: {
                title: 'Test Blog Entry',
                description: 'This is a test blog entry.',
                thumbnailTitle: 'Test Thumbnail Title',
                seoTitle: 'Test SEO Title',
                seoDescription: 'Test SEO Description',
            },
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('displays the title, description, thumbnail title, SEO title, and SEO description of a blog entry', async () => {
        render(
            <DatabaseContext.Provider value={{ database: mockDatabase }}>
                <UserContext.Provider value={{ user: mockUser }}>
                    <MemoryRouter initialEntries={['/content/edit?entry=1234']}>
                        <ContentEntry />
                    </MemoryRouter>
                </UserContext.Provider>
            </DatabaseContext.Provider>
        );

        expect(axios.get).toHaveBeenCalledWith(
            `${process.env.REACT_APP_API_URL}/blog/1234`,
            {
                params: {
                    email: 'test@test.com',
                    databaseId: '1234',
                },
            }
        );

        expect(await screen.findByLabelText('Title')).toHaveValue(
            'Test Blog Entry'
        );
        expect(await screen.findByLabelText('Description')).toHaveValue(
            'This is a test blog entry.'
        );
        expect(await screen.findByLabelText('Thumbnail Title')).toHaveValue(
            'Test Thumbnail Title'
        );
        expect(await screen.findByLabelText('SEO Title')).toHaveValue(
            'Test SEO Title'
        );
        expect(await screen.findByLabelText('SEO Description')).toHaveValue(
            'Test SEO Description'
        );
    });

    it('updates the blog entry when the user clicks the "Publish" button', async () => {
        render(
            <DatabaseContext.Provider value={{ database: mockDatabase }}>
                <UserContext.Provider value={{ user: mockUser }}>
                    <MemoryRouter initialEntries={['/content/edit']}>
                        <ContentEntry />
                    </MemoryRouter>
                </UserContext.Provider>
            </DatabaseContext.Provider>
        );

        axios.post.mockResolvedValueOnce({ data: {} });

        fireEvent.change(await screen.findByLabelText('Title'), {
            target: { value: 'New Blog Entry Title' },
        });
        fireEvent.click(await screen.findByText('Publish'));

        expect(axios.post).toHaveBeenCalledWith(
            `${process.env.REACT_APP_API_URL}/blog/1234`,
            {
                blog: {
                    title: 'New Blog Entry Title',
                    description: '',
                    thumbnailTitle: '',
                    seoTitle: '',
                    seoDescription: '',
                },
                emailId: 'test@test.com',
            }
        );
    });
});
