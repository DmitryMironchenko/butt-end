import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const templateSchema = new Schema({
  info: Object,
  sections: Array,
}, {
  collection: 'TemplatesList',
});

const Template = mongoose.model('Template', templateSchema);
export default Template;
