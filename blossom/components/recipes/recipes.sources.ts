import { BatchFunction, Maybe, deliver, connectionDataLoader } from '@blossom-gql/core';
import {
  sequelizeConnectionAdapter,
  SequelizeConnectionArgsMapper,
} from '@blossom-gql/helpers-sequelize';
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

export const recipeConnectionArgsMapper: SequelizeConnectionArgsMapper<
  any,
  Recipe,
  RequestContext
> = () => {
  return {
    where: {},
  };
};

export const recipeConnectionLoader = connectionDataLoader(
  sequelizeConnectionAdapter(Recipe, recipeConnectionArgsMapper),
);
