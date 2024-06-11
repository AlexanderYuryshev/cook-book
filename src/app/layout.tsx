import type {Metadata} from 'next';
import {DEFAULT_BODY_CLASSNAME, Wrapper} from '../components/Wrapper';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '../styles/globals.scss';

export const metadata: Metadata = {
    title: 'Cook book',
    description: 'For those who love to eat',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={DEFAULT_BODY_CLASSNAME}>
                <Wrapper>{children}</Wrapper>
            </body>
        </html>
    );
}
