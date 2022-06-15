# Learn 

---

## Storybook

---

- Importer les styles de tailwind dans le fichier : 
```js
// => .storybook/previews.js
// Import Tailwind styles
import '../src/styles/index.css'
  ```

- Si une story est servis par le router ou utilise un élement du router, il faut utiliser le decorateur fournis par storybook : 

[Doc](https://storybook.js.org/addons/storybook-addon-react-router-v6)

```bash
yarn add -D storybook-addon-react-router-v6
````
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
---

## Tailwind
---

### Addon  :
- tailwind-scrollbar



