import { resolve, BlossomRootQuery, BlossomRootMutation } from 'blossom/instance';
import {
  RecipeQuery,
  CreateRecipeMutation,
  UpdateRecipeMutation,
  DeleteRecipeMutation,
} from 'blossom/components/recipes/recipes.types';
import { recipeResolver } from 'blossom/components/recipes/recipes.resolvers';

export const recipeRootQuery: RecipeQuery = async function recipeRootQuery(args, ctx, ast) {
  // A root function is where the graph starts! Here you're supposed to retrieve
  // data from a data source (loader or connection), do whatever is necessary with
  // provided inputs and pass it down to a resolver, just like the controller of a
  // MVC pattern.
  //
  // You can call a loader here by doing ctx.loader(/* Name of batch fn */) and
  // a resolver by calling resolve({ data, ctx, using: /* Name of the resolver */ }).
  //
  // TODO: Implement me! i.e. Find what `data` needs to be here in order for
  // this to properly resolve.
  //
  return resolve({
    data,
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
  // A root function is where the graph starts! Here you're supposed to retrieve
  // data from a data source (loader or connection), do whatever is necessary with
  // provided inputs and pass it down to a resolver, just like the controller of a
  // MVC pattern.
  //
  // You can call a loader here by doing ctx.loader(/* Name of batch fn */) and
  // a resolver by calling resolve({ data, ctx, using: /* Name of the resolver */ }).
  //
  // TODO: Implement me! i.e. Find what `data` needs to be here in order for
  // this to properly resolve.
  //
  return resolve({
    data,
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
  // A root function is where the graph starts! Here you're supposed to retrieve
  // data from a data source (loader or connection), do whatever is necessary with
  // provided inputs and pass it down to a resolver, just like the controller of a
  // MVC pattern.
  //
  // You can call a loader here by doing ctx.loader(/* Name of batch fn */) and
  // a resolver by calling resolve({ data, ctx, using: /* Name of the resolver */ }).
  //
  // TODO: Implement me! i.e. Find what `data` needs to be here in order for
  // this to properly resolve.
  //
  return resolve({
    data,
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
  // A root function is where the graph starts! Here you're supposed to retrieve
  // data from a data source (loader or connection), do whatever is necessary with
  // provided inputs and pass it down to a resolver, just like the controller of a
  // MVC pattern.
  //
  // You can call a loader here by doing ctx.loader(/* Name of batch fn */) and
  // a resolver by calling resolve({ data, ctx, using: /* Name of the resolver */ }).
  //
  // TODO: Implement me! i.e. Find what `data` needs to be here in order for
  // this to properly resolve.
  //
  return 'a-unique-identifier';
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'deleteRecipe', using: deleteRecipeRootMutation });
