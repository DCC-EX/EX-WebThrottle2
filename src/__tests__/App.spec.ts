import {describe, test, expect} from 'vitest';

import {mount} from '@vue/test-utils';
import App from '../App.vue';

import {createPinia} from 'pinia';
import router from '../router';
import vuetify from '../plugins/vuetify';

describe('App Tests', () => {
  const pinia = createPinia();

  test('renders properly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [vuetify, pinia, router],
      },
    });
    expect(wrapper.text()).toContain('ExWebThrottle');
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
