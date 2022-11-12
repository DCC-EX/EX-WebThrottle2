import {createVuetify, ThemeDefinition} from 'vuetify';
import * as compoenets from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {iconify} from './iconify';

// <color name="primaryColor">#00a3b9</color>
// <color name="primaryLightColor">#5bd5eb</color>
// <color name="primaryDarkColor">#007489</color>
// <color name="secondaryColor">#00353d</color>
// <color name="secondaryLightColor">#335f67</color>
// <color name="secondaryDarkColor">#001017</color>
// <color name="primaryTextColor">#000000</color>
// <color name="secondaryTextColor">#ffffff</color>

const dccExLight: ThemeDefinition = {
  dark: false,
  colors: {
    'primary': '#00353d',
    'primary-darken-1': '#001017',
    'secondary': '#00a3b9',
    'secondary-darken-1': '#007489',
    'error': '#B00020',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FB8C00',
  },
};

const dccExDark: ThemeDefinition = {
  dark: true,
  colors: {
    'primary': '#00a3b9',
    'primary-darken-1': '#007489',
    'secondary': '#00353d',
    'secondary-darken-1': '#001017',
    'error': '#B00020',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FB8C00',
  },
};

export default createVuetify({
  components: compoenets,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi: iconify('mdi'),
      cib: iconify('cib'),
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          'primary': '#00a3b9',
          'primary-darken-1': '#007489',
          'secondary': '#00353d',
          'secondary-darken-1': '#001017',
        },
      },
    },
  },
});
