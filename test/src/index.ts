import { Hono } from 'hono'
import { Google } from '../../src/index';

const app = new Hono();
const google = Google.OAuth({
  clientId: '',
  clientSecret: ''
});

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
