import { resolve, BlossomRootMutation } from 'blossom/instance';
import {
  CreateRecipeIngredientMutation,
  UpdateRecipeIngredientMutation,
  DeleteRecipeIngredientMutation,
} from 'blossom/components/recipe-ingredients/recipe-ingredients.types';
import { recipeIngredientResolver } from 'blossom/components/recipe-ingredients/recipe-ingredients.resolvers';

import RecipeIngredientModel from 'lib/models/recipe-ingredient.model';
import { recipeIngredientById } from './recipe-ingredients.sources';

export const createRecipeIngredientRootMutation: CreateRecipeIngredientMutation = async function createRecipeIngredientRootMutation(
  args,
  ctx,
  ast,
) {
  const recipeIngredient = await RecipeIngredientModel.create({
    recipeId: args.payload.recipeId,
    ingredientId: args.payload.ingredientId,
    specialInstructions: args.payload.specialInstructions,
    quantity: args.payload.quantity,
    unit: args.payload.unit,
  });

  return resolve({
    data: recipeIngredient,
    ctx,
    using: recipeIngredientResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({
  implements: 'createRecipeIngredient',
  using: createRecipeIngredientRootMutation,
});

export const updateRecipeIngredientRootMutation: UpdateRecipeIngredientMutation = async function updateRecipeIngredientRootMutation(
  args,
  ctx,
  ast,
) {
  const recipeIngredient = await ctx.loader(recipeIngredientById).load(args.id);
  if (!recipeIngredient) {
    throw new Error(`Recipe Ingredient with id ${args.id} not found`);
  }

  await recipeIngredient.update({
    specialInstructions: args.payload.specialInstructions,
    quantity: args.payload.quantity,
    unit: args.payload.unit,
  });

  return resolve({
    data: recipeIngredient,
    ctx,
    using: recipeIngredientResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({
  implements: 'updateRecipeIngredient',
  using: updateRecipeIngredientRootMutation,
});

export const deleteRecipeIngredientRootMutation: DeleteRecipeIngredientMutation = async function deleteRecipeIngredientRootMutation(
  args,
  ctx,
  ast,
) {
  const recipeIngredient = await ctx.loader(recipeIngredientById).load(args.id);
  if (!recipeIngredient) {
    throw new Error(`Recipe Ingredient with id ${args.id} not found`);
  }

  await recipeIngredient.destroy();

  return recipeIngredient.id.toString();
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({
  implements: 'deleteRecipeIngredient',
  using: deleteRecipeIngredientRootMutation,
});
