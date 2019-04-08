import { Resolver } from '@blossom-gql/core';

import { RequestContext } from 'blossom/instance';
import { Recipe } from 'blossom/components/recipes/recipes.types';

import RecipeModel from 'lib/models/recipe.model';

export const recipeResolver: Resolver<
  RecipeModel,
  Recipe,
  RequestContext
> = function recipeResolver(attributes) {
  return {
    __typename: 'Recipe',
    id: attributes.id.toString(),
    title: attributes.title,
    description: attributes.description,
    createdAt: attributes.createdAt.getTime(),
    updatedAt: attributes.updatedAt.getTime(),
    async recipeIngredients() {
      return [];
    },
    async instructions() {
      return [];
    },
    // TODO: Remove this and map attributes to the properties of the output type.
  };
};
