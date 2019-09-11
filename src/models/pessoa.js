import { Sequelize,sequelize } from "./index";

const pessoa = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define(
  "pessoa",
  {
  nome: {
  type: Sequelize.STRING,
  unique: true
  },
  sobrenome: {
  type: Sequelize.STRING
  },
  email: {
  type: Sequelize.STRING
  }
  },
  { schema: "vaga_educacao" }
  );
  
  return Pessoa;
  };
  
  export default pessoa;