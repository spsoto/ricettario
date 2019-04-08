import { Model, DataTypes } from 'sequelize';

import sequelize from 'db/sequelize';

class Recipe extends Model {
  id!: number;
  title!: string;
  description!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Recipe.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
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
    tableName: 'recipes',
  },
);

export default Recipe;
