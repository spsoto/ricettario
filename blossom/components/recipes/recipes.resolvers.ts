import { Resolver } from '@blossom-gql/core';

import { RequestContext } from 'blossom/instance';
import { Recipe } from 'blossom/components/recipes/recipes.types';

export const recipeResolver: Resolver<unknown, Recipe, RequestContext> = function recipeResolver(
  attributes,
) {
  // A resolver is a function that maps the elements from the data source to
  // the elements of the type definition in the GraphQL SDL. This way, you have
  // freedom not only to choose what properties from the data source are
  // exposed or not, but also to create computed properties and call nested
  // elements by calling other loaders and resolvers.
  //
  // You can also get access to the request context by accepting a second
  // argument in the resolver. This can be useful for calling other resolvers
  // or doing things based on user permissions.
  //
  // Finally, you can get GraphQL.JS's GraphQLResolveInfo (i.e. the AST of the)
  // request, by accepting a third argument. This can be used for further
  // optimizations.
  //
  // TODO:
  // - Change unknown in the signature.
  // - Implement the function contents.
  return {
    // Must always be present.
    __typename: 'Recipe',
    // TODO: Remove this and map attributes to the properties of the output type.
    ...otherProps,
  };
};
