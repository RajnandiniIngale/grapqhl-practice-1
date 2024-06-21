const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Cat {
        id: ID!,
        name: String!
    }

    type Query {
        cats : [Cat!]!,
        catById(id: ID!) : Cat!
    }

    type Mutation {
       createCat(name: String!) : Cat!
       updateCat(id: ID!, name: String!): Cat!
       deleteCat(id: ID!): Cat!
    }

`


module.exports =  typeDefs ;