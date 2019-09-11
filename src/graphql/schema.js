const {gql} = require ('apollo-server-express')

const typeDefs = gql`
scalar Date
 type MyType {
    created: Date
 }
    type User {
  id: Int!
  username: String!
  password: String!
  
}
type Pessoa{
  id: Int!
  nome: String!
  sobrenome: String!
  email: String!
}

type Query {
 getUser(id:Int!):User
 getPessoa(id:Int!):Pessoa
}

type Mutation {
  createUser(username: String!, password: String!): User
  createPessoa(nome: String!, sobrenome: String!,email:String!): Pessoa
}
`;

module.exports = typeDefs;