import bookshelf from '../config/bookshelf';

/**
 * Template model
 */
class Template extends bookshelf.Model {
  get tableName() {
    return 'templates';
  }

  get hasTimestamps() {
    return true;
  }
}

export default Template;
