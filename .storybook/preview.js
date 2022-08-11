
// Import styles
import '../src/styles/styles.scss'
import { themes } from '@storybook/theming';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    theme: themes.dark
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}