import { mount } from '@vue/test-utils';
import { expect, describe, it, test} from 'vitest'
import App from '@/App.vue';

describe('App', () => {
    test('App component should mount', () => {
        const wrapper = mount(App)
        expect(wrapper.exists()).toBeTruthy()
      })
  });