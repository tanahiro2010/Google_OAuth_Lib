import { Hono } from 'hono';
import { Google } from '../../src/index';

type Env = {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
};

const app = new Hono<{ Bindings: Env, Variables: { google: Google } }>();

app.use('*', async (c, next) => {
  const google = Google.OAuth({
    clientId: c.env.GOOGLE_CLIENT_ID,
    clientSecret: c.env.GOOGLE_CLIENT_SECRET,
  });
  c.set('google', google);
  await next();
});

app.get('/', (c) => {
  const google = c.get('google');
  const url = google.oauth.url({
    redirect_uri: 'http://127.0.0.1:8787/callback/google',
  });
  return c.json({ url });
});

app.get('/callback', async (c) => {
  const google = c.get('google');
  const code = c.req.query('code');
  if (!code) {
    return c.json({ error: 'Missing code parameter' }, 400);
  }
  const tokenResponse = await google.oauth.token(code, 'http://127.0.0.1:8787/callback/google');
  return c.json(tokenResponse);
});

app.get('/profile', async (c) => {
  const google = c.get('google');
  const accessToken = c.req.query('access_token');
  if (!accessToken) {
    return c.json({ error: 'Missing access_token parameter' }, 400);
  }
  google.accessToken = accessToken;
  const userProfile = await google.user.profile();
  return c.json({ userProfile });
});

export default app;
