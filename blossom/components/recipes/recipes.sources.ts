import { BatchFunction, Maybe, deliver } from '@blossom-gql/core';
import { Op } from 'sequelize';

import { RequestContext } from 'blossom/instance';
import Recipe from 'lib/models/recipe.model';

export const recipeById: BatchFunction<
  string,
  Maybe<Recipe>,
  RequestContext
> = async function recipeById(ids) {
  const recipes = await Recipe.findAll({
    where: {
      id: {
        [Op.in]: ids,
      },
    },
  });

  return deliver(ids, recipes, recipe => recipe.id.toString());
};
