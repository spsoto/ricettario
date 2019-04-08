import { Sequelize, ModelAttributeColumnOptions } from 'sequelize';
import { snakeCase } from 'lodash';

const sequelize = new Sequelize(process.env.POSTGRES_URL!);

sequelize.beforeDefine(attributes => {
  Object.entries(attributes).forEach(([name, attribute]) => {
    if (attribute.hasOwnProperty('type')) {
      (<ModelAttributeColumnOptions>attribute).field = snakeCase(name);
    }
  });
});

export default sequelize;
