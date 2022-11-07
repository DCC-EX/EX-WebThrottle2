import {describe, test, expect} from 'vitest';

import {mount} from '@vue/test-utils';
import Throttle from '../Throttle.vue';

import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

describe('HelloWorld', () => {
  const vuetify = createVuetify({components, directives});
  test('renders properly', () => {
    const wrapper = mount(Throttle, {
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.text()).toContain('WebThrottle');
  });

  // test("logic works", async () => {
  //   const wrapper = mount(Throttle, {
  //     global: {
  //       plugins: [vuetify],
  //     },
  //   });
  // await wrapper.get('button').trigger('click');
  // expect(wrapper.text()).toContain('1');

  // await wrapper.get('#reset').trigger('click');
  // expect(wrapper.text()).toContain('0');
  // });
});
