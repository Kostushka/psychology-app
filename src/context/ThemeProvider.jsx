import React, { useState, useContext } from 'react';
import { changeCssVariables } from '@services/changeCssVariables';

export const THEME_BEHAVIORISM = 'behaviorism';
export const THEME_PSYCHOANALYSIS = 'psychoanalysis';
export const THEME_HUMANISTIC = 'humanistic';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(null);
    const change = (name) => {
        setTheme(name);
        changeCssVariables(name);
    };
    return (
        <ThemeContext.Provider
            value={{
                theme,
                change,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
