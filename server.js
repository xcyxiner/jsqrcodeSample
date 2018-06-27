var connect = require("connect");
var serveStatic = require("serve-static");
const path = require('path');
var app = connect();
app.use(serveStatic(path.join(__dirname, 'public')));
app.listen(3000);