import dotenv from 'dotenv';

dotenv.config({
  path: `${process.env.PWD}/${process.env.NODE_ENV || 'development'}.env`,
});

const { PORT, FRONTEND_PROD_URL, FRONTEND_DEV_URL } = process.env;

// You may use this as a boolean value for different situations
const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
};

export { PORT, FRONTEND_PROD_URL, FRONTEND_DEV_URL, env };
