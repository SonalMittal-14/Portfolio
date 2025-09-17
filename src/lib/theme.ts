export type Theme = 'light' | 'dark';

export const getThemeFromStorage = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  return (stored as Theme) || 'light';
};

export const setThemeInStorage = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', theme);
};
