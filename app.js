import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import knex from './knex';
import {
  NODE_ENV,
  FRONTEND_PROD_URL,
  FRONTEND_DEV_URL,
} from './config/environment';

const app = express();

app.use('db', knex);

if (NODE_ENV === 'production' || NODE_ENV === 'development') {
  app.use(compression());
  app.use(morgan('dev'));
}
if (NODE_ENV === 'production') {
  app.use(
    cors({
      credentials: true,
      origin: FRONTEND_PROD_URL,
    })
  );
} else {
  app.use(cors({ credentials: true, origin: FRONTEND_DEV_URL }));
}

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

export default app;
