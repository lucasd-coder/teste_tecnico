import { Router } from 'express';
import FollowerController from '../controllers/FollowerController';

const router = new Router();


router.post('/:id', FollowerController.store);

export default router;