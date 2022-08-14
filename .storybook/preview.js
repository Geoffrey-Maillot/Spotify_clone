import '../src/styles/styles.scss'
import logo from '../src/assets/img/Spotify_Logo.png'
import { create } from '@storybook/theming';

const myTheme =  create({
  base: 'dark',
  brandTitle: 'Spotifaie',
  brandUrl: 'https://spotifaie.surge.sh',
  brandImage: logo
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    theme: myTheme,
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}