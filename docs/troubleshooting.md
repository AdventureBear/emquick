Sometimes things go wrong. Take these steps to clear out your local development environment. Rebooting your machine will accomplishes most goals as well.

### Clear the ports

You may encounter an issue where the ports don't get released. In this case, you'll need to kill the processes holding on to those ports. The port values are the ones from your `.env` file.

<!-- prettier-ignore -->
!!! warning
    Running this command on macOS/linux will force close ==*all running apps*== bound to the port

Assuming you want to search for port 3000

#### macOS or linux

```bash
kill -9$(lsof -t -i :3000)
```

#### Windows

```bash
netstat -a -n -o  | find "3000"
```

giving you the following result

`TCP 10.211.55.25:3000 52.167.219.168:443 ESTABLISHED 4252`

with the final value being the PID to kill. If there are more than one, just go down the list.

```bash
Taskkill /PID 4252 /F
```

### Nuke the DB

Some issues happen because the database becomes corrupt for whatever reason. Using docker makes the process of starting fresh much easier.

#### Destroy docker containers

Using kitematic, you can destroy the containers. This method is highly recommended as you can view the logs should anything go wrong.

If you prefer the commandline, you can run these commands.

```bash
docker kill $(docker ps -q)
```

#### Purge database

The database files are stored under `docker/mongodb_data`. These files are local and not tracked by git. You can delete these files at any time, but you will have to reseed the database if you do.
