const BaseContactPage = require('./BaseContactPage');
const { contactPaths } = require('../support/contactPaths');

function getContactPage(domain) {
  const paths = contactPaths[domain];

  if (!paths) {
    throw new Error(`ContactPageFactory: Domain "${domain}" unsupported. Available: ${Object.keys(contactPaths).join(', ')}`);
  }

  return new BaseContactPage(domain, paths);
}

module.exports = { getContactPage };