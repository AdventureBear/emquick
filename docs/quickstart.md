### Prerequisites

#### .env file

You will require a local `.env` file located at the root of the project. This will not be tracked by git.

<!-- prettier-ignore -->
??? example "Default Development .env file"
    ```bash
    NODE_ENV=development
    SEED=false
    MODELS=
    DB_HOST=127.0.0.1
    DB_PORT=27017
    DB_NAME=database
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

#### Docker

The local development environment makes use of docker containers to host the mongodb instance. Docker containers let's us create a clean work environment, separated from anything installed in our local machine.

Install according to your operating system from the [Docker Store](https://store.docker.com/search?type=edition&offering=community)

#### Kitematic

Kitematic is a gui for docker machine. It let's us manage the container's lifecycles, as well as look at the container logs. The latest docker install will ask if you want to install it. Select yes.

<!-- prettier-ignore -->
!!! tip
    Sometimes the containers won't stop properly. If this is the case, you can force stop it using kitematic, or remove it completely. If you remove it, you will have to re-seed the database.

### Launch Dev Environment

##### Server

This will launch your express server to the port set in the `BACKEND_PORT` environment variable. It will then launch the mongodb docker containers.

```js
npm run server
```

##### Client

This will start the front-end client and bind to the port set in `REACT_APP_PORT`, and will make api calls to the port in `REACT_APP_BACKEND_PORT`

```js
npm run client
```

##### Documentation

This starts the hot-reloading documentation server using a docker container.

You can view the docs at `localhost:8000`

```js
npm run docs
```
