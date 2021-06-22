const bodyParser = require('body-parser');

function bodpars(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}

module.exports = bodpars;
