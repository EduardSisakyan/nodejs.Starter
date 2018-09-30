import * as express from 'express';

import PersonContoller from './person';
import AuthContoller from './auth';

export default (app: express.Application) => {
  app.use('/api/Person', PersonContoller);
  app.use('/api/Auth', AuthContoller);
};