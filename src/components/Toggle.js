import React, { useCallback } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import Toggle from '@theme/Toggle';

function _Toggle({ className }) {
    const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

    const onToggleChange = useCallback(
        (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
        [setLightTheme, setDarkTheme]
    );

    return (
        <Toggle
            aria-label="Theme mode toggle"
            className={className}
            checked={isDarkTheme}
            onChange={onToggleChange}
        />
    );
}

export default _Toggle;
