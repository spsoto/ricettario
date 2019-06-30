import { Model, DataTypes } from 'sequelize';

import sequelize from 'db/sequelize';

class Instruction extends Model {
  id!: number;
  recipeId!: number;
  instructionContent!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Instruction.init(
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
    instructionContent: {
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
    tableName: 'instructions',
  },
);

export default Instruction;
