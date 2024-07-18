import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/api/counter', async () => {
    //await delay(3000);

    return HttpResponse.json({
      data: 1,
    });
  }),
];

export default handlers;
