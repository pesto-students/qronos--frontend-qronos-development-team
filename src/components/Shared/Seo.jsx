import React from 'react'
import { Helmet } from 'react-helmet';

const Seo = ({
    title,
    description
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='title' content={title} />
            <meta name='description' content={description} />
            <meta name='og:title' content={title} />
            <meta name='og:description' content={description} />
            <meta name='og:type' content='Website' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
        </Helmet>
    )
}

export default Seo