import { DefaultSeo } from 'next-seo';
import React from "react";

interface SeoLayoutProps {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    children: React.ReactNode;
}

const SeoLayout = ({
    title,
    description,
    url,
    imageUrl,
    children
}: SeoLayoutProps) => {
    return (
        <>
            <DefaultSeo
                title={title}
                description={description}
                openGraph={{
                    type: 'website',
                    url: url,
                    title: title,
                    description: description,
                    images: [
                        {
                            url: imageUrl,
                                width: 1200,
                            height: 630,
                            alt: description,
                        },
                    ],
                }}
            />
            {children}
        </>
    );
};

export default SeoLayout;
