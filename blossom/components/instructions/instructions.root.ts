import { resolve, BlossomRootMutation } from 'blossom/instance';
import {
  CreateInstructionMutation,
  UpdateInstructionMutation,
  DeleteInstructionMutation,
} from 'blossom/components/instructions/instructions.types';
import { instructionResolver } from 'blossom/components/instructions/instructions.resolvers';

export const createInstructionRootMutation: CreateInstructionMutation = async function createInstructionRootMutation(
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
BlossomRootMutation({ implements: 'deleteInstruction', using: deleteInstructionRootMutation });
