import { resolve, BlossomRootMutation } from 'blossom/instance';
import {
  CreateRecipeIngredientMutation,
  UpdateRecipeIngredientMutation,
  DeleteRecipeIngredientMutation,
} from 'blossom/components/recipe-ingredients/recipe-ingredients.types';
import { recipeIngredientResolver } from 'blossom/components/recipe-ingredients/recipe-ingredients.resolvers';

export const createRecipeIngredientRootMutation: CreateRecipeIngredientMutation = async function createRecipeIngredientRootMutation(
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
BlossomRootMutation({
  implements: 'deleteRecipeIngredient',
  using: deleteRecipeIngredientRootMutation,
});
