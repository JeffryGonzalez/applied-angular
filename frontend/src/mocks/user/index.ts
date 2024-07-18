import { http, HttpResponse, delay } from 'msw';

const handlers = [
  http.get('/api/user', async () => {
    // await delay(3000);
    return HttpResponse.json({
      sub: 'Charlie Brown',
      prefs: {
        countVariable: 1
      }
    });
  }),
];

export default handlers;
