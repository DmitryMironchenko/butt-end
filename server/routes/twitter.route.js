import express from 'express';
import HttpStatus from 'http-status-codes';
import * as TwitterCtrl from '../controllers/twitter.controller';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Welcome to twitter!');
  });

router.route('/search')
  .get(async (req, res) => {
  try {
      const { q, count = 100, lat, lng, radius } = req.query;
      const response = await TwitterCtrl.getNearbyTweets({ lat, lng, radius, q, count });
      const data = JSON.parse(response);
      const processedData = data.statuses
        .map(d => {
          let dLat = parseFloat(lat);
          let dLng = parseFloat(lng);
          const seedLat = Math.random();
          const seedLng = Math.random();
          const rad = +radius.split('mi')[0];

          if (!d.geo || !d.coordinates) {
            /*dLat = dLat + (rad / 69.72) * (seedLat - 0.5);
            dLng = dLng + (rad / 55.24) * (seedLng - 0.5);

            return { ...d, lat: dLat, lng: dLng };*/
          } else {
            return { ...d, lat: d.geo.coordinates[0], lng: d.geo.coordinates[1] };
          }

          // console.log('[WARN] Twitter search results: received geo or coordinates', d);
          return d;
        })
        .filter(d => d.lat && d.lng);
      res.json(processedData);
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: true, e
      });
    }

  });

export default router;
