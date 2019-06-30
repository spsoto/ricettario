import { resolve, BlossomRootQuery, BlossomRootMutation } from 'blossom/instance';
import {
  IngredientQuery,
  CreateIngredientMutation,
  UpdateIngredientMutation,
} from 'blossom/components/ingredients/ingredients.types';
import { ingredientResolver } from 'blossom/components/ingredients/ingredients.resolvers';
import Ingredient from 'lib/models/ingredient.model';

import { ingredientById } from './ingredients.sources';

export const ingredientRootQuery: IngredientQuery = async function ingredientRootQuery(
  args,
  ctx,
  ast,
) {
  const ingredient = await ctx.loader(ingredientById).load(args.id);
  if (!ingredient) {
    return null;
  }

  return resolve({
    data: ingredient,
    ctx,
    using: ingredientResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootQuery({ implements: 'ingredient', using: ingredientRootQuery });

export const createIngredientRootMutation: CreateIngredientMutation = async function createIngredientRootMutation(
  args,
  ctx,
  ast,
) {
  const ingredient = await Ingredient.create({
    name: args.payload.name,
  });

  return resolve({
    data: ingredient,
    ctx,
    using: ingredientResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'createIngredient', using: createIngredientRootMutation });

export const updateIngredientRootMutation: UpdateIngredientMutation = async function updateIngredientRootMutation(
  args,
  ctx,
  ast,
) {
  const ingredient = await ctx.loader(ingredientById).load(args.id);
  if (!ingredient) {
    throw new Error(`Ingredient with id ${args.id} not found.`);
  }

  await ingredient.update({ name: args.payload.name });

  return resolve({
    data: ingredient,
    ctx,
    using: ingredientResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'updateIngredient', using: updateIngredientRootMutation });
