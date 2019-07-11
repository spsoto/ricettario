import { resolve, BlossomRootQuery, BlossomRootMutation } from 'blossom/instance';
import {
  RecipeQuery,
  RecipesQuery,
  CreateRecipeMutation,
  UpdateRecipeMutation,
  DeleteRecipeMutation,
} from 'blossom/components/recipes/recipes.types';
import {
  recipeResolver,
  recipeConnectionResolver,
} from 'blossom/components/recipes/recipes.resolvers';
import Recipe from 'lib/models/recipe.model';

import { recipeById, recipeConnectionLoader } from './recipes.sources';
import { LoadOrder } from '@blossom-gql/core';

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

// Added later by using:
// ```
// npx blossom cg root -f blossom/components/recipes/recipes.gql --stdout
// ```
export const recipesRootQuery: RecipesQuery = async function recipesRootQuery(args, ctx, ast) {
  const { first, last, after, before } = args;

  return resolve({
    data: recipeConnectionLoader(
      {},
      {
        primary: 'id',
        order: LoadOrder.ASC,
        first,
        last,
        after,
        before,
      },
      ctx,
    ),
    ctx,
    using: recipeConnectionResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootQuery({ implements: 'recipes', using: recipesRootQuery });

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
