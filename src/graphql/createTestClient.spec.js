const { createTestClient } = require('apollo-server-testing');
const server = require('./../');
const { query } = createTestClient(server);
import "core-js/stable";
import "regenerator-runtime/runtime";
query({
  query: models.Pessoa,
  variables: { id: 1 },
  query: models.User,
  variables: { id: 2 },
});

