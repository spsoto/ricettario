import { BatchFunction, Maybe, deliver } from '@blossom-gql/core';

import { RequestContext } from 'blossom/instance';

export const instructionById: BatchFunction<
  string,
  Maybe<unknown>,
  RequestContext
> = async function instructionById(ids) {
  // Here you are receiving an array of scalars used as IDs. You're expected to
  // return an array where the position "n" of the array contains the entity
  // associated to the ID of the position "n" of the array, otherwise null.
  //
  // [4, 9, 5] --> [<- Entity(id: 4) ->, <- Entity(id: 9) ->, <- Entity(id: 5) ->]
  //
  // You're supposed to retrieve the entities from your data source in a single
  // operation. THIS IS THE ONLY WAY TO AVOID A n+1 QUERY. Examples:
  //
  // - If your data comes from Sequelize or Mongo, use a [Op.in] / $in operator.
  //
  // - If you're hitting an API, try to find an endpoint to retrieve multiple
  //   entities by ID at once.
  //
  // - If you're hitting an Elastic server, try to use _mget.
  //
  // Your data source will probably give you the results unordered or some of them
  // might be missing. Use the `deliver` and `deliverGroup` functions from the
  // `@blossom-gql/core` module for automatically re-sorting them for you.
  //
  // You can also return an array on this position if you need to return multiple
  // results / entities by ID.
  //
  // If you need information about the request context, is available as a second
  // argument for this function. However, BEWARE THAT LOADERS ARE NOT SUPPOSED TO
  // DEPEND ON CONTEXT INFORMATION FOR THE PULLING LOGIC.
  //
  // See documentation on Loaders for more information.
  //
  // TODO:
  //
  // - Replace unknown on the return type of the function with the type you're
  //   expected to return from your data source.
  //
  // - Implement the function contents.
  //
  throw new Error('Not implemented.');
};

export const instructionByRecipeId: BatchFunction<
  string,
  Maybe<unknown>,
  RequestContext
> = async function instructionByRecipeId(recipeIds) {
  // Here you are receiving an array of scalars used as IDs. You're expected to
  // return an array where the position "n" of the array contains the entity
  // associated to the ID of the position "n" of the array, otherwise null.
  //
  // [4, 9, 5] --> [<- Entity(id: 4) ->, <- Entity(id: 9) ->, <- Entity(id: 5) ->]
  //
  // You're supposed to retrieve the entities from your data source in a single
  // operation. THIS IS THE ONLY WAY TO AVOID A n+1 QUERY. Examples:
  //
  // - If your data comes from Sequelize or Mongo, use a [Op.in] / $in operator.
  //
  // - If you're hitting an API, try to find an endpoint to retrieve multiple
  //   entities by ID at once.
  //
  // - If you're hitting an Elastic server, try to use _mget.
  //
  // Your data source will probably give you the results unordered or some of them
  // might be missing. Use the `deliver` and `deliverGroup` functions from the
  // `@blossom-gql/core` module for automatically re-sorting them for you.
  //
  // You can also return an array on this position if you need to return multiple
  // results / entities by ID.
  //
  // If you need information about the request context, is available as a second
  // argument for this function. However, BEWARE THAT LOADERS ARE NOT SUPPOSED TO
  // DEPEND ON CONTEXT INFORMATION FOR THE PULLING LOGIC.
  //
  // See documentation on Loaders for more information.
  //
  // TODO:
  //
  // - Replace unknown on the return type of the function with the type you're
  //   expected to return from your data source.
  //
  // - Implement the function contents.
  //
  throw new Error('Not implemented.');
};
