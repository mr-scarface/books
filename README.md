# APIs

#### 1. Get all books

```http
  GET http://127.0.0.1:8080/v1/book/
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pageNumber`      | `number` | **Default** is *1* |
| `limit`      | `number` | **Default** is *10* |

 #### 2. Create a book

```http
  POST http://127.0.0.1:8080/v1/book/
```

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title must be unique |
| `author`      | `string` | **Required**. Author's name|
| `summary`      | `string` | **Required**. Summary of the book|

 #### 3. Get a book

```http
  GET http://127.0.0.1:8080/v1/book/6540e4e4ee808157d5a93f2a
```

| Parameter      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Unique id of the book|

 #### 4. Update a book

```http
  PATCH http://127.0.0.1:8080/v1/book/6540e4e4ee808157d5a93f2a
```

| Parameter      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Unique id of the book|

##### Any one or all of the following

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title must be unique |
| `author`      | `string` | **Required**. Author's name|
| `summary`      | `string` | **Required**. Summary of the book|

 #### 5. Delete a book

```http
  DELETE http://127.0.0.1:8080/v1/book/6540e4e4ee808157d5a93f2a
```

| Parameter      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Unique id of the book|

# Instructions to run the server locally

### Go to the root folder and run

```bash
npm install
```

### Install mongo to your system and start the service

#### You can also start a mongo container using the following command, Note: the command is for running the container without any data sustenance,
```bash
docker run --name <container-name> -p 27017:27017 -d --rm mongo
```

### Update .env folder at the root of the project

##### Add '127.0.0.1' as your db host if you are running the service locally, else add the name of the db container

```.env
PORT=<number>
MONGODB_URI=mongodb://<127.0.0.1 or container-name>:27107/<db-name>
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

##### If you want to sustain the data in the database add the following anywhere under 'mongo-db' container in your 'docker-compose.yaml' file,
```docker-compose.yaml
...
volumes:
    - <path to store the data>:/data/db
...
```