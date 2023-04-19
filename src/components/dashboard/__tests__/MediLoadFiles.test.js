import React from 'react';
import { render } from '@testing-library/react';
import MediaLoadFiles from '../MediaLoadFiles';

describe('MediaLoadFiles component', () => {
    it('renders the component with a list of files', () => {
        const allFiles = [
            {
                previewLink: 'https://example.com/image1.jpg',
                Key: 'images/image1.jpg',
                Size: 1024,
            },
            {
                previewLink: 'https://example.com/image2.jpg',
                Key: 'images/image2.jpg',
                Size: 2048,
            },
            {
                previewLink: 'https://example.com/image3.jpg',
                Key: 'images/image3.jpg',
                Size: 3072,
            },
        ];

        const { getByText, getByAltText } = render(<MediaLoadFiles allFiles={allFiles} />);

        allFiles.forEach((file) => {
            const image = getByAltText(file.Key.split('/')[1]);
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute('src', file.previewLink);

            const fileName = getByText(file.Key.split('/')[1]);
            expect(fileName).toBeInTheDocument();

            const fileSize = getByText(`${file.Size} bytes`);
            expect(fileSize).toBeInTheDocument();
        });
    });

    it('renders the component with no files', () => {
        const { queryByTestId } = render(<MediaLoadFiles allFiles={[]} />);

        expect(queryByTestId('no-files-message')).toBeInTheDocument();
    });
});
