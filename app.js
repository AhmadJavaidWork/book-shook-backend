import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
// import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import api from './api';
import knex from './knex';
import { NODE_ENV, FRONTEND_URL } from './config/environment';

const app = express();

app.use('db', knex);

if (NODE_ENV === 'production' || NODE_ENV === 'development') {
  app.use(compression());
  app.use(morgan('dev'));
}

app.use(cors({ credentials: true, origin: FRONTEND_URL }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
app.use(api);

export default app;
