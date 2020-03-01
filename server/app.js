const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const cors = require('cors')
const app = express();

// alow cors
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own

mongoose.connect('mongodb+srv://admin:admin@gql-tpmor.mongodb.net/graphql?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 }).then(() => {
  console.log('connected to database');
 });

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4005, () => {
    console.log('now listening for requests on port 4005');
});
