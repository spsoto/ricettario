import { resolve, BlossomRootMutation } from 'blossom/instance';
import {
  CreateInstructionMutation,
  UpdateInstructionMutation,
  DeleteInstructionMutation,
} from 'blossom/components/instructions/instructions.types';
import { instructionResolver } from 'blossom/components/instructions/instructions.resolvers';
import InstructionModel from 'lib/models/instruction.model';

import { instructionById } from './instructions.sources';

export const createInstructionRootMutation: CreateInstructionMutation = async function createInstructionRootMutation(
  args,
  ctx,
  ast,
) {
  const instruction = await InstructionModel.create({
    recipeId: args.payload.recipeId,
    instructionContent: args.payload.instructionContent,
  });

  return resolve({
    data: instruction,
    ctx,
    using: instructionResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'createInstruction', using: createInstructionRootMutation });

export const updateInstructionRootMutation: UpdateInstructionMutation = async function updateInstructionRootMutation(
  args,
  ctx,
  ast,
) {
  const instruction = await ctx.loader(instructionById).load(args.id);
  if (!instruction) {
    throw new Error(`Recipe with ID ${instruction} not found.`);
  }

  await instruction.update({ instructionContent: args.payload.instructionContent });

  return resolve({
    data: instruction,
    ctx,
    using: instructionResolver,
    ast,
  });
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'updateInstruction', using: updateInstructionRootMutation });

export const deleteInstructionRootMutation: DeleteInstructionMutation = async function deleteInstructionRootMutation(
  args,
  ctx,
  ast,
) {
  const instruction = await ctx.loader(instructionById).load(args.id);
  if (!instruction) {
    throw new Error(`Recipe with ID ${instruction} not found.`);
  }

  await instruction.destroy();

  return instruction.id.toString();
};

// Registers the functon above as a root value in the Blossom instance.
BlossomRootMutation({ implements: 'deleteInstruction', using: deleteInstructionRootMutation });
