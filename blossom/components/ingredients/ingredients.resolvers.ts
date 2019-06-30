import { Resolver } from '@blossom-gql/core';

import { RequestContext } from 'blossom/instance';
import IngredientModel from 'lib/models/ingredient.model';

import { Ingredient } from '../ingredients/ingredients.types';

export const ingredientResolver: Resolver<
  IngredientModel,
  Ingredient,
  RequestContext
> = function ingredientResolver(attributes) {
  return {
    __typename: 'Ingredient',
    id: attributes.id.toString(),
    name: attributes.name,
    createdAt: attributes.createdAt.getTime(),
    updatedAt: attributes.updatedAt.getTime(),
  };
};
