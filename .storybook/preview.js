
// Import Tailwind styles
import '../src/styles/index.css'
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