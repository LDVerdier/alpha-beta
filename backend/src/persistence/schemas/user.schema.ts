import { EntitySchema } from 'typeorm';
import { BaseColumnSchemaPart } from './base.schema';
import { User } from '../../user';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    ...BaseColumnSchemaPart,
    firstName: {
      type: String,
      name: 'first_name',
      nullable: false,
    },
  },
});
