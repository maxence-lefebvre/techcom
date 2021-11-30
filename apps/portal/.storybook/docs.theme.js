import { themes, create } from '@storybook/theming';

import '@fontsource/montserrat';
import '@fontsource/fira-code';

export default create({
  ...themes.light,
  fontBase: 'Montserrat, sans-serif',
  fontCode: '"Fira Code", monospace',
});
