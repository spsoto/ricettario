import { BatchFunction, Maybe, deliver } from '@blossom-gql/core';
import { Op } from 'sequelize';

import { RequestContext } from 'blossom/instance';
import IngredientModel from 'lib/models/ingredient.model';

export const ingredientById: BatchFunction<
  string,
  Maybe<IngredientModel>,
  RequestContext
> = async function ingredientById(ids) {
  const ingredients = await IngredientModel.findAll({
    where: {
      id: {
        [Op.in]: ids,
      },
    },
  });

  return deliver(ids, ingredients, ingredient => ingredient.id.toString());
};
