### Install complete boilerplate

1.  install docker
    - the boilerplate launches docker containers for mongo and nosqlclient
    - it will also seed it if necessary
    - https://docs.docker.com/install/#supported-platforms
2.  install kitematic
    - it's a little buggy, but a very simple app to let you see the status of your containers. This includes any logs they output.
    - https://kitematic.com/docs/
3.  copy the .env.sample to .env
4.  run `npm install`
5.  start the dev environment using two terminal tabs/windows
    - `npm start server` in one
    - `npm start client` in another
    - this allows you to separate the logs, which is really useful when you need to see what's going on with your routes.

### Install only loggers

1.  npm install debug-logger (debug wrapper for extra node features)
2.  npm install debug (used for browser)
3.  copy the logger.js file in the /src/helpers dir.

To use the logger you'd require, not import because you have to pass the namespace on import. If you were working on the App component, then

```
const log = require('./helpers/logger')('App')

// then you can use it like
log.trace('some info', someVar)
log.debug(...)
log.log(...)
log.info(...)
log.warn(...)
log.error(...)
```
