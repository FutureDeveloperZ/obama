const ObamaDocsClient = require('./Structure/ObamaDocsClient');
const config = require('../config.json');

const client = new ObamaDocsClient(config);
client.start();