import { resolve, BlossomRootQuery, BlossomRootMutation } from 'blossom/instance';
import {
  RecipeQuery,
  CreateRecipeMutation,
  UpdateRecipeMutation,
  DeleteRecipeMutation,
} from 'blossom/components/recipes/recipes.types';
import { recipeResolver } from 'blossom/components/recipes/recipes.resolvers';
import Recipe from 'lib/models/recipe.model';

import { recipeById } from './recipes.sources';

export const recipeRootQuery: RecipeQuery = async function recipeRootQuery(args, ctx, ast) {
  const recipe = await ctx.loader(recipeById).load(args.id);
  if (!recipe) {
    return null;
  }

  return resolve({
    data: recipe,
    ctx,
    using: recipeResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootQuery({ implements: 'recipe', using: recipeRootQuery });

export const createRecipeRootMutation: CreateRecipeMutation = async function createRecipeRootMutation(
  args,
  ctx,
  ast,
) {
  const recipe = await Recipe.create({
    title: args.payload.title,
    description: args.payload.description,
  });

  return resolve({
    data: recipe,
    ctx,
    using: recipeResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'createRecipe', using: createRecipeRootMutation });

export const updateRecipeRootMutation: UpdateRecipeMutation = async function updateRecipeRootMutation(
  args,
  ctx,
  ast,
) {
  const recipe = await ctx.loader(recipeById).load(args.id);
  if (!recipe) {
    throw new Error(`Recipe with id ${args.id} not found.`);
  }

  await recipe.update(args.payload);

  return resolve({
    data: recipe,
    ctx,
    using: recipeResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'updateRecipe', using: updateRecipeRootMutation });

export const deleteRecipeRootMutation: DeleteRecipeMutation = async function deleteRecipeRootMutation(
  args,
  ctx,
  ast,
) {
  const recipe = await ctx.loader(recipeById).load(args.id);
  if (!recipe) {
    throw new Error(`Recipe with id ${args.id} not found.`);
  }

  await recipe.destroy();

  return args.id;
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'deleteRecipe', using: deleteRecipeRootMutation });
