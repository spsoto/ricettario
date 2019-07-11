import { Resolver, Connection, ConnectionData } from '@blossom-gql/core';

import { RequestContext, resolveArray, createConnectionResolver } from 'blossom/instance';
import { Recipe } from 'blossom/components/recipes/recipes.types';

import RecipeModel from 'lib/models/recipe.model';

import { instructionByRecipeId } from '../instructions/instructions.sources';
import { instructionResolver } from '../instructions/instructions.resolvers';
import { recipeIngredientsByRecipeId } from '../recipe-ingredients/recipe-ingredients.sources';
import { recipeIngredientResolver } from '../recipe-ingredients/recipe-ingredients.resolvers';

export const recipeResolver: Resolver<
  RecipeModel,
  Recipe,
  RequestContext
> = function recipeResolver(attributes) {
  const id = attributes.id.toString();

  return {
    __typename: 'Recipe',
    id,
    title: attributes.title,
    description: attributes.description,
    createdAt: attributes.createdAt.getTime(),
    updatedAt: attributes.updatedAt.getTime(),
    async recipeIngredients(_, ctx, ast) {
      const recipeIngredients = await ctx.loader(recipeIngredientsByRecipeId).load(id);

      return resolveArray({
        data: recipeIngredients,
        ctx,
        using: recipeIngredientResolver,
        ast,
      });
    },
    async instructions(_, ctx, ast) {
      const instructions = await ctx.loader(instructionByRecipeId).load(id);

      return resolveArray({
        data: instructions,
        ctx,
        using: instructionResolver,
        ast,
      });
    },
  };
};

export const recipeConnectionResolver: Resolver<
  ConnectionData<RecipeModel, RequestContext>,
  Connection<Recipe, RequestContext>,
  RequestContext
> = createConnectionResolver('Recipe', recipeResolver);
