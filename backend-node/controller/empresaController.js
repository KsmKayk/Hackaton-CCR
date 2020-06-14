const base = require('airtable').base('appsmTr9SsPRenYqz');
const airtableKey = require("../controller/airtable.json")

var Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: airtableKey.key
});
var base = Airtable.base('appsmTr9SsPRenYqz');

function airtableGet() {
  return new Promise((accept, reject) => {
    base("Empresas")
      .select({
        view: "Grid view",
      })
      .firstPage(function (err, records) {
        if (err) {
          return reject(err);
        }
        let air = [];
        records.forEach(function (record) {
          air.push(record.fields);
        });
        return accept(air);
      });
  });
}

module.exports = {
  async index(req, res) {
    let result = await airtableGet();
    return res.json(result);
  },
  async store(req, res) {

  }
}