import { Router } from 'express';
import RepositoryController from '../controllers/RespositoryController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/:id', loginRequired, RepositoryController.store);
router.get('/:id', loginRequired, RepositoryController.show);

export default router;