import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import knex from './knex';
import { env } from './config/environment';

const app = express();

app.use('db', knex);

if (env.production || env.development) {
  app.use(compression());
  app.use(morgan('dev'));
}
if (env.production) {
  app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_PROD_URL,
    })
  );
} else {
  app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));
}

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

export default app;
