# APIs

1. To get all the available books; send the 'pageNumber' and 'limit' as a query parameter. If not sent, the default will be, pageNumber = 1 & limit = 10.
```bash
GET http://127.0.0.1:8080/v1/book/
```

2. To create a book; send the 'title', 'author', and 'summary' in the body of the request. 'title' should be unique.
```bash
POST http://127.0.0.1:8080/v1/book/
```

3. To get / read a book, send the 'id' of the book as a parameter in the request.
```bash
GET http://127.0.0.1:8080/v1/book/6540e4e4ee808157d5a93f2a
```

4. To update a book, send the 'id' of the book as a parameter in the request along with the update object in the body. If the 'title' is getting updated make sure its unique. 
```bash
PATCH http://127.0.0.1:8080/v1/book/6540e4e4ee808157d5a93f2a
```

5. To delete a book, send the 'id' of the book as a parameter in the request.
```bash
DELETE http://127.0.0.1:8080/v1/book/6540e4e4ee808157d5a93f2a
```

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