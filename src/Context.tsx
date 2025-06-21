import { ReactElement, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

export const ThemeContext = createContext('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const context: Theme = useContext(ThemeContext) as Theme;
    return context;
}
