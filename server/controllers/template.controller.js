import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import Template from '../models/template.model';

/**
 * Find all the users
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
  Template.forge()
    .fetchAll()
    .then(templates => {
        console.log('[INFO]: templates received', templates);
        res.json({
          error: false,
          data: templates.toJSON()
        });
      }
    )
    .catch(err => {
      console.log('[ERROR]: failed to get templates', e);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
      });}
    );
}

/**
 *  Find user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findByName(req, res) {
  Template.forge({name: req.params.name})
    .fetch()
    .then(template => {
      if (!template) {
        res.status(HttpStatus.NOT_FOUND).json({
          error: true, data: {}
        });
      }
      else {
        res.json({
          error: false,
          data: template.toJSON()
        });
      }
    })
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
      })
    );
}
