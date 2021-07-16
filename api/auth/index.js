import { Router } from 'express';
import { unique, register, signIn, signOut } from './controller';
import { password, master, token } from '../../services/passport';

const router = new Router();

router.post('/sign-up', master(), unique, register);
router.post('/sign-in', master(), password, signIn);
router.get('/sign-out', token({ required: true }), signOut);

export default router;
