const { loginConfig } = require('../support/loginConfig');
const { LoginPage } = require('./LoginPage');

function getLoginPage(domain) {
  const config = loginConfig[domain];
  if (!config) {
    throw new Error(`LoginPageFactory: Unsupported domain "${domain}"`);
  }
  if (!LoginPage) {
    throw new Error(`LoginPageFactory: Page class is not defined for the domain "${domain}"`);
  }
  return new LoginPage(config, domain);
}

module.exports = { getLoginPage };