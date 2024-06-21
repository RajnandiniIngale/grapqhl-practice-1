
const express = require("express")
const  typeDefs  = require("./typeDefs");
const resolvers  = require("./resolvers");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const PORT = 4000;

const startServer = async () => {

    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start();

    server.applyMiddleware({ app });

    try {

        await mongoose.connect('mongodb://localhost:27017/test');
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB", error);
    }


    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    })
}


startServer();