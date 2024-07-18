import user from './user';
import software from './software-handler';
import books from './books-handler';
export const handlers = [...user, ...software, ...books];
