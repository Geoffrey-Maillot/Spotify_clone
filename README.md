# Learn

---

## Storybook

---

- Importer les styles de tailwind dans le fichier :

```js
// => .storybook/previews.js
// Import Tailwind styles
import "../src/styles/index.css";
```

- Si une story est servis par le router ou utilise un élement du router, il faut utiliser le decorateur fournis par storybook :

[Doc](https://storybook.js.org/addons/storybook-addon-react-router-v6)

```bash
yarn add -D storybook-addon-react-router-v6
```

```js
// .storybook/main.js
module.exports = {
  addons: ["storybook-addon-react-router-v6"],
};
```

> Story :

```js
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'; // => Importer le décorateur
import MenuLink from './MenuLink';

export default {
  title: 'Menu/MenuLink',
  component: MenuLink,
  decorators: [withRouter], // => Rajouter le décorateur
} as ComponentMeta<typeof MenuLink>;

const Template: ComponentStory<typeof MenuLink> = (args) => (
  <MenuLink {...args} />
);

export const Default = Template.bind({});
Default.args = { label: 'Nav Link', to: '/' };

export const WithIcon = Template.bind({});
WithIcon.args = { label: 'With icon', icon: true, to: '/' };

```

> TEST

Depuis React 18, les test des story ne fonctionnent plus avec la nouvelle API de React  
Le problème est connu et a été corrigé dans le verion 7.0 alpha.  
En attendant une version stable avant d'effectuer une migration les test spécifique à storybook ont été désactivé.  
https://github.com/storybookjs/storybook/issues/17831

---

## Tailwind

---

### Addon :

- tailwind-scrollbar
