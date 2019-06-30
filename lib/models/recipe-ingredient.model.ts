import { Model, DataTypes } from 'sequelize';

import sequelize from 'db/sequelize';

class RecipeIngredient extends Model {
  id!: number;
  recipeId!: number;
  ingredientId!: number;
  specialInstructions!: string;
  quantity!: number;
  unit!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

RecipeIngredient.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    recipeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    ingredientId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    specialInstructions: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'recipe_ingredients',
  },
);

export default RecipeIngredient;
