import { DataSource } from 'typeorm';
import { UserSchema } from '../schemas/user.schema';
import { DATA_SOURCE } from '../database.providers';
import { User } from '../../user';

export const Users = 'Users';

export interface Users {
  find: () => Promise<User[]>;
}

const typeORMUsersFactory = (dataSource: DataSource): Users => {
  const baseRepository = dataSource.getRepository(UserSchema);

  return {
    find: async () => {
      return baseRepository.find();
    },
  };
};

export const TypeORMUsers = {
  provide: Users,
  useFactory: typeORMUsersFactory,
  inject: [DATA_SOURCE],
};
