
var gzippo = require('gzippo')
  , express = require('express')
  , app

app = express();

app.use(express.logger('dev'));

app.use(gzippo.staticGzip("" + __dirname + "/app"));

app.listen(process.env.PORT || 5000);