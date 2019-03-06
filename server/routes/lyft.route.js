import express from 'express';
import * as templateCtrl from '../controllers/template.controller';
import HttpStatus from 'http-status-codes';
import * as TransportationCtrl from '../controllers/lyft.controller';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Welcome to transportation!');
  });

router.route('/nearby-drivers')
  .get(async (req, res) => {
    try {
      const { lat, lng, types } = req.query;
      const data = await TransportationCtrl.getNearbyDrivers({ lat, lng, types });
      console.log('[SUCCESS] TransportationCtrl.getNearbyDrivers', data);
      res.json(data);
    } catch (e) {
      console.log('[ERROR] TransportationCtrl.getNearbyDrivers', e);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: true, e
      });
    }
  });

export default router;
