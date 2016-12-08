# node-day-3
Notes and Code for Node 3 - DM16

20161208 - Day 3 - Node III- DM16

### express.static
- serve up your static assets/public files/front end application code
- `app.use(express.static(__dirname + ‘public’)`
    - want it to run for every request
    - `__dirname` is a built in node thing, that references that root folder

### cors
- Cross Origin Resource Sharing
- by default, applications only accept same-domain requests
- CORS needs to be enabled to do otherwise
    - you can set either ‘*’ (wildcard/everyone), or hardcoded addresses

### sessions
- remember user state across HTTP requests
- `express.session`
- `$ npm install —save express-session`
- require it into index.js
    - `var session = require(‘express-session’)`
- use it, passing in options

```
app.use(session({
  secret: ‘somesecretthing’,
  resave: false,
  saveUninitialized: true
}));
```

 - we only have resave and saveUninitialized because the defaults change all the time
 - there are other options you can pass in if you want, check the docs
- access session information with `req.session`

### config file for secret keys
- make a file called `config.js`
- immediately put `config.js` into our `.gitignore`
    - or else there’s no point
- inside of config.js

```
module.exports = {
  SESSION_SECRET: ‘somesecretthingjklasfdjfwei2309@#@#@#’,
  GOOGLE_API_KEY: '290sdlkgo-gjewijapjjasd-afwejklfwea'
};
```

use it in index.js or any other file that uses it

```
var config = require('./config');

app.use(session({
  secret: config.SESSION_SECRET
});
```

file-that-uses-google-api.js

```
var config = require(‘../config’);
var Google = require(‘google-api’);

Google.getMap({
  api_key: config.GOOGLE_API_KEY
});
```

