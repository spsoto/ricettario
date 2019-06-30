import { Resolver } from '@blossom-gql/core';

import { RequestContext } from 'blossom/instance';
import { Instruction } from 'blossom/components/instructions/instructions.types';
import InstructionModel from 'lib/models/instruction.model';

export const instructionResolver: Resolver<
  InstructionModel,
  Instruction,
  RequestContext
> = function instructionResolver(attributes) {
  return {
    // Must always be present.
    __typename: 'Instruction',
    id: attributes.id.toString(),
    recipeId: attributes.recipeId.toString(),
    instructionContent: attributes.instructionContent,
    createdAt: attributes.createdAt.getTime(),
    updatedAt: attributes.updatedAt.getTime(),
    async recipe() {
      throw new Error('not implemented yet');
    },
  };
};
