import express from 'express';
// import * as userCtrl from '../controllers/user.controller';
import * as templateCtrl from '../controllers/template.controller';
// import isAuthenticated from '../middlewares/authenticate';
// import validate from '../config/joi.validate';
// import schema from '../utils/validator';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    templateCtrl.findAll(req, res);
  });

export default router;

router.route('/:name')
  .get((req, res) => {
    templateCtrl.findByName(req, res);
  });
