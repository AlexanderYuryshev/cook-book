'use client';

import React from 'react';
import Link from 'next/link';
import block from 'bem-cn-lite';
import {Button, Icon, type Theme, ThemeProvider} from '@gravity-ui/uikit';
import {Moon, Sun} from '@gravity-ui/icons';

import './Wrapper.scss';

const b = block('wrapper');

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = DARK;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

export type AppProps = {
    children: React.ReactNode;
};

export const Wrapper: React.FC<AppProps> = ({children}) => {
    const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);

    const isDark = theme === DARK;

    return (
        <ThemeProvider theme={theme}>
            <div className={b()}>
                <div className={b('layout')}>
                    <div className={b('header')}>
                        <div className={b('logo')}>
                            <Link href="/">
                                <Button size="l" view="outlined">
                                    Главная
                                </Button>
                            </Link>

                            <Link href="/ingredients">
                                <Button size="l" view="outlined">
                                    Ингредиенты
                                </Button>
                            </Link>

                            <Link href="/recipes">
                                <Button size="l" view="outlined">
                                    Рецепты
                                </Button>
                            </Link>

                            <Link href="/menu">
                                <Button size="l" view="outlined">
                                    Меню
                                </Button>
                            </Link>

                            <Button
                                size="l"
                                view="outlined"
                                onClick={() => {
                                    setTheme(isDark ? LIGHT : DARK);
                                }}
                            >
                                <Icon data={isDark ? Sun : Moon} />
                            </Button>
                        </div>
                    </div>
                    <div className={b('content')}>{children}</div>
                </div>
            </div>
        </ThemeProvider>
    );
};
