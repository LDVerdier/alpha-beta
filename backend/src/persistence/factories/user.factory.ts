import { User } from '../../user';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(User, async () => {
  const user = new User();
  user.firstName = 'John';

  return user;
});
