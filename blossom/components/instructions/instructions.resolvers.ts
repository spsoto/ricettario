import { Resolver } from '@blossom-gql/core';

import { resolve, RequestContext } from 'blossom/instance';
import { Instruction } from 'blossom/components/instructions/instructions.types';
import InstructionModel from 'lib/models/instruction.model';
import { recipeById } from '../recipes/recipes.sources';
import { recipeResolver } from '../recipes/recipes.resolvers';

export const instructionResolver: Resolver<
  InstructionModel,
  Instruction,
  RequestContext
> = function instructionResolver(attributes) {
  const recipeId = attributes.recipeId.toString();

  return {
    // Must always be present.
    __typename: 'Instruction',
    id: attributes.id.toString(),
    recipeId,
    instructionContent: attributes.instructionContent,
    createdAt: attributes.createdAt.getTime(),
    updatedAt: attributes.updatedAt.getTime(),
    async recipe(_, ctx, ast) {
      const recipe = await ctx.loader(recipeById).load(recipeId);
      if (!recipe) {
        throw new Error(`Recipe with id ${recipeId} not found.`);
      }

      return resolve({
        data: recipe,
        ctx,
        using: recipeResolver,
        ast,
      });
    },
  };
};
