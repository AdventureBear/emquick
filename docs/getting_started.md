This app's server and logging structure is controlled completely with environment variables. They will be read from the local `.env` file, and from the production environment when deployed.

## Environment variables

!!! important
    any variable required by React ^^*must*^^ be prepended by `REACT_APP_`

### Production variables

| var        | description                                       | notes                                                        |
| ---------- | ------------------------------------------------- | ------------------------------------------------------------ |
| `NODE_ENV` | sets the correct working environment              | not really required, but a good practice to make it explicit |
| `DB_HOST`  | the url of the mongodb instance, without the port |
| `DB_PORT`  | the port of the mongodb instance                  |
| `DB_NAME`  | the name of the database you wish to connect to   |

### Development variables

!!! info
    the required production variables are also required for development.

| var                      | description                                | notes                                                   |
| ------------------------ | ------------------------------------------ | ------------------------------------------------------- |
| `REACT_APP_BACKEND_PORT` | express server port                        | must match the value of `BACKEND_PORT`                  |
| `BACKEND_PORT`           | express server port                        |
| `MONGO_ADMIN`            | port for the mongodb admin ui              |
| `LAUNCH_DOCKER`          | sets whether to start the docker container | this is used in case you manually start your containers |

### Optional variables

!!! info
    all string variables are space or comma separated

| var                     | description                                                 | notes                                                                                                                                            |
| ----------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `SEED`                  | Boolean that initiates seeding the db                       |
| `DEBUG`                 | string of debug modules to log to stdout                    |
| `DEBUG_LEVEL`           | string value representing ^^lowest^^ level to log           | values in increasing order </br> <ol start="0"><li>`trace`</li><li>`debug`</li><li>`log`</li><li>`info`</li><li>`warn`</li><li>`error`</li></ol> |
| `REACT_APP_DEBUG`       | string value of debug modules to log to the browser console |
| `REACT_APP_DEBUG_LEVEL` | string value representing ^^lowest^^ level to log           | values are the same as `DEBUG_LEVEL`                                                                                                             |
| `CONTAINER_NAME`        | name of the docker container                                | if not provided a random one will be chosen                                                                                                      |

### Example env files

!!! example "Production .env file"
    These values can also be set in your host provider's dashboard, e.g heroku.
    This example assumes usage of an mlab instance.
    ```bash
    NODE_ENV=production
    DB_HOST=mongodb://username:password@ds012345.mlab.com
    DB_PORT=56789
    DB_NAME=mydb
    ```

!!! example "Development .env file"
    This is a working development .env file
    ```bash
    NODE_ENV=development
    DB_HOST=127.0.0.1
    DB_PORT=27017
    DB_NAME=mydb
    REACT_APP_PORT=3000
    REACT_APP_BACKEND_PORT=4000
    BACKEND_PORT=4000
    MONGO_ADMIN=2000
    DEBUG=* -express:*
    DEBUG_LEVEL=info
    REACT_APP_DEBUG=* -sockjs-client:*
    REACT_APP_DEBUG_LEVEL=info
    CONTAINER_NAME=emquick-mongo
    LAUNCH_DOCKER=true
    ```

## Database

The database is entirely controlled through environment variables in docker containers. If the `LAUNCH_DOCKER` variable is set, it will

1. launch the docker container using a docker-compose file and waits until it starts
    * the check polls for the status of the nosqlclient at `http://localhost:2000/healthcheck`
2. establishes a connection to the mongodb instance by creating a uri from these variables
    * `DB_HOST`
    * `DB_PORT`
    * `DB_NAME`  


!!! important 
    The containers can be stopped using the terminal, or kitematic. If they're stopped using the terminal, ensure that they completely teardown. At the moment the terminal will return before the containers have fully stopped.

### Seeding

To seed the database, ==two== environment variables to be set:

* `SEED`
* `MODELS`
  
`SEED` is a boolean that will initiate seeding the database.

`MODELS` is a comma or space separated string, with the name of the models to seed.

When the database is initialized, it will check to see if these two variables are set. If they are, it will look through the top-level models folder and

1. `require` the model and create an instance
2. purge any models of this type
3. loop through each item in the model and create a document


### Logging

The `debug-logger` module is being used as the logger, with a helper file located at `src/helpers/logger.js` to allow for logging to the browser.

The following levels of logging are available

* trace
* debug
* log
* info
* warn
* error

The logger instance is a curried function that accepts a namespace as the second parameter. Currently the second parameter is the name of the file, and is set when `require`d.

!!! snippet
    ```js
    const log = require('./helpers/logger')('App')
    // then you can use it like
    log.trace('some info', someVar)
    log.debug(...)
    log.log(...)
    log.info(...)
    log.warn(...)
    log.error(...)
    ```

