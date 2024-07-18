import user from './user';
import software from './software-handler';
import books from './books-handler';
import counter from './counter-handler';
export const handlers = [...user, ...software, ...books, ...counter];
