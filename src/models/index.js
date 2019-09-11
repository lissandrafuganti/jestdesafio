require('dotenv/config');
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,


  {
    dialect: "postgres",
   
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  }
);

const models = {
  User: sequelize.import("./user"),
  Pessoa: sequelize.import("./pessoa")
};

export { sequelize,Sequelize,models };

export default models;
