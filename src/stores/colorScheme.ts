import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light';
export const colorScheme = writable<Theme>(
  (() => {
    if (typeof localStorage !== 'undefined') {
      return (localStorage.getItem('theme') || 'dark') as Theme;
    }
    return 'dark' as Theme;
  })(),
);
