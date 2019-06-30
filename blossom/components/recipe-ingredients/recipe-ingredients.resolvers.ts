import { Resolver } from '@blossom-gql/core';

import { RequestContext, resolve } from 'blossom/instance';
import {
  RecipeIngredient,
  Unit,
} from 'blossom/components/recipe-ingredients/recipe-ingredients.types';

import RecipeIngredientModel from 'lib/models/recipe-ingredient.model';
import { ingredientById } from '../ingredients/ingredients.sources';
import { ingredientResolver } from '../ingredients/ingredients.resolvers';

function stringToUnit(unit: string): Unit {
  switch (unit) {
    case 'KG':
      return Unit.Kg;
    case 'G':
      return Unit.G;
    case 'OZ':
      return Unit.Oz;
    case 'LB':
      return Unit.Lb;
    case 'FL_OZ':
      return Unit.FlOz;
    case 'ML':
      return Unit.Ml;
    case 'L':
      return Unit.L;
    case 'U':
      return Unit.U;
    case 'CUP':
      return Unit.Cup;
    case 'TBSP':
      return Unit.Tbsp;
    case 'TSP':
      return Unit.Tsp;
    case 'TO_TASTE':
      return Unit.ToTaste;
    default:
      throw new Error(`Unexpected unit ${unit}`);
  }
}

export const recipeIngredientResolver: Resolver<
  RecipeIngredientModel,
  RecipeIngredient,
  RequestContext
> = function recipeIngredientResolver(attributes) {
  const ingredientId = attributes.ingredientId.toString();

  return {
    __typename: 'RecipeIngredient',
    id: attributes.id.toString(),
    recipeId: attributes.recipeId.toString(),
    ingredientId,
    specialInstructions: attributes.specialInstructions,
    quantity: attributes.quantity,
    unit: stringToUnit(attributes.unit),
    createdAt: attributes.createdAt.getTime(),
    updatedAt: attributes.updatedAt.getTime(),
    async ingredient(_, ctx, ast) {
      const ingredient = await ctx.loader(ingredientById).load(ingredientId);
      if (!ingredient) {
        throw new Error(`Ingredient with id ${ingredientId} not found.`);
      }

      return resolve({
        data: ingredient,
        ctx,
        using: ingredientResolver,
        ast,
      });
    },
  };
};
