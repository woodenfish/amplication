import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';
import { JsonValue } from 'type-fest';
import { Commit } from '../models/Commit'; // eslint-disable-line import/no-cycle
import { Block } from './Block'; // eslint-disable-line import/no-cycle
@ObjectType({
  isAbstract: true
})
export class BlockVersion {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  displayName!: string;

  @Field(() => String, {
    nullable: true
  })
  description?: string;

  @Field(() => Block, {
    nullable: false
  })
  block?: Block;

  @Field(() => Int, {
    nullable: false
  })
  versionNumber!: number;

  commitId?: string | null;

  @Field(() => Commit, {
    nullable: true
  })
  commit?: Commit;

  @Field(() => GraphQLJSONObject, {
    nullable: true
  })
  settings?: JsonValue;

  inputParameters?: JsonValue;

  outputParameters?: JsonValue;
}
