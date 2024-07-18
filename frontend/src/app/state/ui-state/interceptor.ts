import {
  HttpEventType,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { UiStateEvents } from '.';

export const navigationInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const store = inject(Store);
  const { method, url } = req;
  const payload = {
    url,
    method,
  };
  store.dispatch(UiStateEvents.navigation({ payload }));
  return next(req).pipe(
    tap((r) => {
      if (r.type === HttpEventType.Response) {
        const responsePayload = { ...payload, status: r.status };
        store.dispatch(
          UiStateEvents.navigationEnd({ payload: responsePayload })
        );
      }
    })
  );
};
