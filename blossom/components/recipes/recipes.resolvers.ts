import { Resolver } from '@blossom-gql/core';

import { RequestContext, resolveArray } from 'blossom/instance';
import { Recipe } from 'blossom/components/recipes/recipes.types';

import RecipeModel from 'lib/models/recipe.model';
import InstructionModel from 'lib/models/instruction.model';

import { instructionByRecipeId } from '../instructions/instructions.sources';
import { instructionResolver } from '../instructions/instructions.resolvers';
import { Instruction } from '../instructions/instructions.types';

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
    async recipeIngredients() {
      return [];
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
