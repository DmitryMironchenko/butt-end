const fs = require('fs');
const path = require('path');

const data = [];
const templatesPath = path.resolve(__dirname, 'templates');

const items = fs.readdirSync(templatesPath);
console.log('FOOOOO', items.length);
console.log(items);

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  const item = items[i];
  const fileName = path.parse(item).name;

  data.push({
    'name': fileName,
    'title': fileName,
    'template': fs.readFileSync(path.resolve(templatesPath, item), 'utf8'),
  });
}

module.exports = data;
