const { request} = require('pactum');
const { Before } = require('@cucumber/cucumber');



Before(() => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    request.setDefaultTimeout(6000);
    request.setBaseUrl('https://iqubepreprod.tvsmotor.com/iQube/api');
});