import { PORT } from './config/environment';
import app from './app';

const start = async () => {
  try {
    await app.listen(PORT);
    console.log(`🚀  GraphQL server running at PORT: ${PORT}`);
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();
