import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://aelpires.com/icon.svg',
    brandTitle: 'Alexandre Pires Components',
    brandUrl: 'https://aelpires.com',
  },
});
