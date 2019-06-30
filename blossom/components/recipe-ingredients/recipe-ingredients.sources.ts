import { BatchFunction, Maybe, deliver, deliverGroup } from '@blossom-gql/core';
import { Op } from 'sequelize';

import { RequestContext } from 'blossom/instance';
import RecipeIngredientModel from 'lib/models/recipe-ingredient.model';

export const recipeIngredientById: BatchFunction<
  string,
  Maybe<RecipeIngredientModel>,
  RequestContext
> = async function recipeIngredientById(ids) {
  const recipeIngredients = await RecipeIngredientModel.findAll({
    where: {
      id: {
        [Op.in]: ids,
      },
    },
  });

  return deliver(ids, recipeIngredients, recipeIngredient => recipeIngredient.id.toString());
};

export const recipeIngredientsByRecipeId: BatchFunction<
  string,
  ReadonlyArray<RecipeIngredientModel>,
  RequestContext
> = async function recipeIngredientsByRecipeId(recipeIds) {
  const recipeIngredients = await RecipeIngredientModel.findAll({
    where: {
      recipeId: {
        [Op.in]: recipeIds,
      },
    },
  });

  return deliverGroup(recipeIds, recipeIngredients, recipeIngredient =>
    recipeIngredient.recipeId.toString(),
  );
};

export const recipeIngredientsByIngredientId: BatchFunction<
  string,
  ReadonlyArray<RecipeIngredientModel>,
  RequestContext
> = async function recipeIngredientsByIngredientId(ingredientIds) {
  const recipeIngredients = await RecipeIngredientModel.findAll({
    where: {
      ingredientId: {
        [Op.in]: ingredientIds,
      },
    },
  });

  return deliverGroup(ingredientIds, recipeIngredients, recipeIngredient =>
    recipeIngredient.ingredientId.toString(),
  );
};
