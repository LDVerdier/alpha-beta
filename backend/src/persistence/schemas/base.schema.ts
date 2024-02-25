import { EntitySchemaColumnOptions } from 'typeorm';

export const BaseColumnSchemaPart = {
  id: {
    type: Number,
    primary: true,
    generated: true,
  } as EntitySchemaColumnOptions,
};
