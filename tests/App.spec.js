import { createApp } from 'vue';
import { render } from '@testing-library/vue';
import App from '../src/App.vue';

test('renders App component', async () => {
  const app = createApp(App);
  const { getByText } = render(App, {}, app);
  const heading = getByText('Welcome to My App');
  expect(heading).toBeInTheDocument();
});
