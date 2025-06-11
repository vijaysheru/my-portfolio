import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';
export type Font = 'inter' | 'poppins' | 'roboto';
export type ColorScheme = 'blue' | 'purple' | 'green' | 'orange';

interface ThemeState {
  theme: Theme;
  font: Font;
  colorScheme: ColorScheme;
}

export const useTheme = () => {
  const [themeState, setThemeState] = useState<ThemeState>(() => {
    // Load from localStorage or use defaults
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      try {
        return JSON.parse(savedTheme);
      } catch {
        // If parsing fails, use defaults
      }
    }
    return {
      theme: 'light' as Theme,
      font: 'inter' as Font,
      colorScheme: 'blue' as ColorScheme,
    };
  });

  // Save to localStorage whenever theme state changes
  useEffect(() => {
    localStorage.setItem('portfolio-theme', JSON.stringify(themeState));
    
    // Apply theme class to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(themeState.theme);
    
    // Apply font class to document
    document.documentElement.classList.remove('font-inter', 'font-poppins', 'font-roboto');
    document.documentElement.classList.add(`font-${themeState.font}`);
    
    // Apply color scheme class to document
    document.documentElement.classList.remove('scheme-blue', 'scheme-purple', 'scheme-green', 'scheme-orange');
    document.documentElement.classList.add(`scheme-${themeState.colorScheme}`);
  }, [themeState]);

  const setTheme = (theme: Theme) => {
    setThemeState(prev => ({ ...prev, theme }));
  };

  const setFont = (font: Font) => {
    setThemeState(prev => ({ ...prev, font }));
  };

  const setColorScheme = (colorScheme: ColorScheme) => {
    setThemeState(prev => ({ ...prev, colorScheme }));
  };

  const toggleTheme = () => {
    setTheme(themeState.theme === 'light' ? 'dark' : 'light');
  };

  return {
    ...themeState,
    setTheme,
    setFont,
    setColorScheme,
    toggleTheme,
  };
};