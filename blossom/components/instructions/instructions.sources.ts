import { BatchFunction, Maybe, deliver, deliverGroup } from '@blossom-gql/core';
import { Op } from 'sequelize';

import { RequestContext } from 'blossom/instance';
import InstructionModel from 'lib/models/instruction.model';

export const instructionById: BatchFunction<
  string,
  Maybe<InstructionModel>,
  RequestContext
> = async function instructionById(ids) {
  const instructions = await InstructionModel.findAll({
    where: {
      id: {
        [Op.in]: ids,
      },
    },
  });

  return deliver(ids, instructions, instruction => instruction.id.toString());
};

export const instructionByRecipeId: BatchFunction<
  string,
  ReadonlyArray<InstructionModel>,
  RequestContext
> = async function instructionByRecipeId(recipeIds) {
  const instructions = await InstructionModel.findAll({
    where: {
      recipeId: {
        [Op.in]: recipeIds,
      },
    },
  });

  return deliverGroup(recipeIds, instructions, instruction => instruction.recipeId.toString());
};
