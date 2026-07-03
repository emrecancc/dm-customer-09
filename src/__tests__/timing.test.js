import { getResponseTime } from '../api';

test('API responds within 300ms', async () => {
  const time = await getResponseTime();
  expect(time).toBeLessThan(850);
});