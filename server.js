/*import _ from 'lodash';
import express from 'express';
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import bodyParser from 'body-parser';
import querystring from 'querystring';
import xml from 'xml';

import templateGQLSchema from './graphql/schema/Schema';
import swagger from './swagger.json';

const app = express();
app.use(bodyParser.json());         // to support JSON-encoded bodies
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true,
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, PATCH");
  next();
});*/

/*
mongoose.connect('mongodb://localhost:27017/local');
const db = mongoose.connection;
autoIncrement.initialize(db);

const Schema = mongoose.Schema;
export const templateSchema = new Schema({
  id: Number,
  name: String,
  displayName: String,
  author: {
    id: Number,
    fullName: String,
  },
  templateJSON: String,
  templateJSX: String,
}, {
  collection: 'TemplatesList',
});

templateSchema.plugin(autoIncrement.plugin, 'Template');
export const Template = mongoose.model('Template', templateSchema);
*/
/*app.use('/graphql', graphqlHTTP (req => ({
  schema: templateGQLSchema,
  graphiql: true,
})));*/

/*
db.on('error', () => {
  console.log('---FAILED to connect to mongoose');
});

db.once('open', () => {
  console.log('+++Connected to mongoose');
});
*/
/*

// start the server
app.listen(3001, () => {
  console.log("+++Express Server is Running!!!");
});

app.get('/swagger', (req, res) => {
  res.json(swagger);
});

app.route('/templates')
  .get((req, res) => {
    Template.find({}).exec((err, resp) => {
      if (!err) {
        console.log('+++Templates acquired', resp);
        res.json({
          data: resp/!*_.map(resp, i => ({
            id: i._id,
            templateJSON: JSON.parse(i.templateJSON),
            templateJSX: i.templateJSX,
          }))*!/,
        });
      } else {
        console.log('---Templates acquiring failed', err);
      }
    });
  })
  .post((req, res) => {
    const { info, template } = req.body;

    const tpl = new Template({
      name,
      displayName,
      author,
      templateJSON: JSON.stringify(templateJSON),
      templateJSX: templateJSX
    });

    tpl.save((err, res) => {
      if (err) {
        console.log(`---Template save failed ${err}`);
      }

      console.log(`+++Template saved successfully: ${info}`);
    });

    res.send('ok');
  });


app.get('/templates/:id', templateLookupById, (req, res) => {
  const {format} = req.query;

  console.log('+++ GET template', req.template);
  console.log('+++ GET template Format: ', format);

  if (format !== 'xml') {
    res.json({
      success: true,
      data: req.template,
    });
  } else {
    // WARNING: this only works for FORMS
    const {template} = req;
    const xmlString = xml({
      Fragment: [{
        Form: [{
          _attr: { title: template.info.name, titleField: 'title' },
        },
          ...template.sections.map(section => ({
            Section: [
              {
                _attr: { title: section.title },
              },
              ...section.fields.map(field => {
                if (field.fieldType === 'textBox') {
                  return {
                    FormInput: [{
                      _attr: {
                        label: field.label,
                        accessor: field.accessor,
                        ...(field.validation ? { validate: field.validation } : null ),
                      }
                    }],
                  };
                }
                if (field.fieldType === 'textArea') {
                  return {
                    FormTextarea: [{
                      _attr: {
                        label: field.label,
                        accessor: field.accessor,
                        ...(field.validation ? { validate: field.validation } : null ),
                      }
                    }],
                  };
                }
              }),
            ],

          }))],
      }],
    });
    res.set('Content-Type', 'text/xml');
    res.send(xmlString);
  }
});
*/

/*
app.get('/template-lookup/:name', templateLookupByName, (req, res) => {
  console.log('+++ GET template-lookup', req.template);

  res.json({
    success: true,
    data: req.template,
  });
});

app.patch('/templates/:id', templateLookupById, (req, res) => {
  const {id} = req.template;

  const template = JSON.parse(req.body);
  const {info, sections} = template;

  console.log('Trying to update template id:', id);
  console.log('Trying to update template info:', info);
  console.log('Trying to update template sections:', sections);

  console.log('====================================');
  console.log(req);
  console.log('====================================');

  if (!id) {
    res.status(404).send('---Template Not Found');
    return;
  }

  Template.findOneAndUpdate({_id: id}, {$set: template}).exec((err, resp) => {
    if (err) {
      console.log(`---Failed to update template ${err}`);
      res.status(500).send(`Failed to update template ${err}`);
    } else {
      console.log(`+++Succeeded to update template`);
      res.send('ok');
    }
  });
});

function templateLookupById(req, res, next) {
  const { id } = req.params;

  if (!id) {
    res.status(404).send('Template Not Found');
  }

  Template.findById(id).exec((err, resp) => {
    if (err) {
      console.log('---Failed to search for template');
      res.status(404).send('---Failed to get template, ' + err);
      return;
    }
    console.log('+++Template found', resp);
    const { id, info, template } = resp;
    req.template = {
      id,
      info,
      template: JSON.parse(template)
    };

    next();
  });
}

function templateLookupByName(req, res, next) {
  const { name } = req.params;

  if (!name) {
    res.status(404).send('Template Not Found');
  }

  console.log('[INFO] templateLookupByName', name);

  Template.find({ 'info.name': name }).exec((err, resp) => {
    if (err) {
      console.log('---Failed to search for template by name');
      res.status(404).send('---Failed to get template, ' + err);
      return;
    }
    if (!resp.length) {
      console.log('---Failed to search for template by name. No results found.')
      res.status(404).send('---Failed to find template by name');
      return;
    }
    console.log('+++Template lookup found by name', resp);
    const { _id: id, info, template } = resp[0];
    req.template = {
      id,
      info,
      template: JSON.parse(template)
    };

    next();
  });
};
*/
