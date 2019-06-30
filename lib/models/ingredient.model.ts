import { Model, DataTypes } from 'sequelize';

import sequelize from 'db/sequelize';

class Ingredient extends Model {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Ingredient.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
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
    tableName: 'ingredients',
  },
);

export default Ingredient;
