import dotenv from 'dotenv';

dotenv.config({
  path: `${process.env.PWD}/${process.env.NODE_ENV || 'development'}.env`,
});

const { PORT, FRONTEND_URL, NODE_ENV } = process.env;

// You may use this as a boolean value for different situations

export { PORT, FRONTEND_URL, NODE_ENV };
