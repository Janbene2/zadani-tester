const { Domains } = require('./domains');

const sharedSelectors = {
    email: '#email',
    password: '#current-password',
    submit: 'button[data-analytics-id="button.login"]'
};

const loginConfig = {
    [Domains.CZ]: {
        url: '/prihlaseni',
        redirect: '/faktura',
        ...sharedSelectors
    },
    [Domains.COM]: {
        url: '/login',
        redirect: '/invoice',
        ...sharedSelectors,
    },
    [Domains.SK]: {
        url: '/prihlasenie',
        redirect: '/faktura',
        ...sharedSelectors
    }
}

module.exports = { loginConfig };