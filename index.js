import express from 'express';
import consign from 'consign';
import argv from 'minimist';
import swagger from 'swagger-node-express';

const app = express();

argv(process.argv.slice(2));
const subpath = express();

app.use('/v1', subpath);
swagger.setAppHandler(subpath);
app.use(express.static('dist'));
swagger.setApiInfo({
    title: "example API",
    description: "API to do something, manage something...",
    termsOfServiceUrl: "",
    contact: "yourname@something.com",
    license: "",
    licenseUrl: ""
});

subpath.get('/v1', function (req, res) {
    res.sendfile(__dirname + '/dist/index.html');
});

swagger.configureSwaggerPaths('', 'api-docs', '');

var domain = 'localhost';
if(argv.domain !== undefined)
    domain = argv.domain;
else
    console.log('No --domain=xxx specified, taking default hostname "localhost".');
var applicationUrl = 'http://' + domain;
swagger.configure(applicationUrl, '1.0.0');

consign({ verbose: false })
    .include('libs/config.js')
    .then('db.js')
    .then('auth.js')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);

    module.exports = app;