import {describe, test, expect} from 'vitest';

describe('import vue app', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../App.vue');
    expect(cmp).toBeDefined();
  });
});
