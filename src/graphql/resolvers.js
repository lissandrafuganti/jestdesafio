


import "core-js/stable";
import "regenerator-runtime/runtime";

const resolvers = {
 
  Query:{
    async function getUser(root,({ id }),({ models })){
      return  await models.User.findByPk(id)
    },
    async function getPessoa(root, ({ id }), ({ models })){
      return await models.Pessoa.findByPk(id)
    }
    
    
  },
  Mutation: {
    createUser: async (root, { username,password  }, { models }) => {
      
    try{ const user = await models.User.create({
       username,
       password,
       
    })
    
      return user;
  }catch(err){
    console.log('catch create user',err.message)
  }
  
},
createPessoa: async (root, { nome,sobrenome,email }, { models }) => {
      
  try{ const pessoa = await models.Pessoa.create({
     nome,
     sobrenome,
     email
  })
  
    return pessoa;
}catch(err){
  console.log('catch create user',err.message)
}

}


}
}
module.exports = resolvers;