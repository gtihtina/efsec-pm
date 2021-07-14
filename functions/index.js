require('dotenv').config()
global.fetch = require("node-fetch");
global.functions = require('firebase-functions')
global.env_config = Object.keys(functions.config()).length ? functions.config() : require('./env.json')

const { genSalesBotEntry, genProcurementBotEntry, genTrelloEntry } = require('./src/webhookFunctions/index')

exports.webhookSales = functions
    .region('europe-west1')
    .https
    .onRequest(genSalesBotEntry)

exports.webhookProcurement = functions
    .region('europe-west1')
    .https
    .onRequest(genProcurementBotEntry)

exports.webhookTrello = functions
    .region('europe-west1')
    .https
    .onRequest(genTrelloEntry)