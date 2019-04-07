import { resolve, BlossomRootQuery, BlossomRootMutation } from 'blossom/instance';
import {
  IngredientQuery,
  CreateIngredientMutation,
  UpdateIngredientMutation,
} from 'blossom/components/ingredients/ingredients.types';
import { ingredientResolver } from 'blossom/components/ingredients/ingredients.resolvers';

export const ingredientRootQuery: IngredientQuery = async function ingredientRootQuery(
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
    using: ingredientResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'updateIngredient', using: updateIngredientRootMutation });
