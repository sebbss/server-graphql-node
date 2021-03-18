const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb+srv://jose:blue@testcluster1-pctoe.mongodb.net/mangodb?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
    console.log('connected');
})
const app = express();

app.use(cors());

app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}));

app.listen(4000, ()=>{
    console.log('now listening for requests on port 4000')
});