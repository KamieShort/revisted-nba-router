import fetch from 'cross-fetch';
// import { mswData } from './tests/mswData';
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';

global.fetch = fetch;

// const server = setupServer(
//   rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) =>
//     res(ctx.json([mswData]))
//   )
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
