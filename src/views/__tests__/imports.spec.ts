import {describe, test, expect} from 'vitest';

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../HomeView.vue');
    expect(cmp).toBeDefined();
  });
});
