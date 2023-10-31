# Instructions

### Go to the root folder and run

```bash
npm install
```

### Install mongo to your system and start the service

### Update .env folder at the root of the project

##### Add '127.0.0.1' as your db host if you are running the service locally, else add the name of the db container

```.env
PORT=<number>
MONGODB_URI=mongodb://<127.0.0.1 or container name>:27107/<db-name>
```

### Start the node server

```bash
npm start
```

### You can run all the services together

#### Install docker and then,

```bash
docker compose up
```