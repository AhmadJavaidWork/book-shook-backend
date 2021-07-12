import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';
import knex from './knex';

const app = express();

app.use('db', knex);

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(5000, () => console.log('Server running...'));
