NodeJS REST API
===============
*Base code for a RESTful API using NodeJS*

Installation
------------
First of all you need to install the `nodejs` framework. Click [HERE](https://nodejs.org/en/download/package-manager/) to install.

You also need the `mongodb` server installed and running. You can click [HERE](https://docs.mongodb.com/manual/installation/) to install.

Now we need to install the `nodejs` modules, just run the command below on root of the project:
```
npm install
```

Easy peasy lemon squeezy, we already have all the requirements to run our RESTful API Server, let's run.

How to run
----------
We have two ways to run the server, both will run the server on PORT 3000 of your computer.

The first one (and my favorite) will run the server utilizing the `nodemon` module. The interesting point of this way is that will automatically rebuild the server at ever change on code. Run on root directory:
```
nodemon server.js
```
The second way is run the server by the `npm`, but in this way the code will NOT be rebuilded automatically. For this run in root directory:
```
npm run start
```
That's it! Your server is running. For example, you can test using the Postman or any other HTTP Request tool. Made a request of `POST` to the following URL: `http://localhost:3000/example`. If all it's ok you will receive the response:
```
{
  "message": "Example sucefully created!"
  "ok": true
}
```
Structure
----------
This project is structured following the MVC model (but without the V part), this could be verified on directory `./api/` were we have the base structure:
```
__Routes
|
__Controllers
|
__Models
```
All requests are received by the `server.js` interpreted by the `route.js` and redirected to a controller inside the `./api/controllers/`. The controller receive the request and do the operations in database using a model, what is an objectification of the collections in `MongoDB`.

Inside the `./api/controllers/ExampleController.js` exist a basic CRUD for reference.

The model part `./api/models/Example.js` has an `MongoDB` Schema, wich specify what is the fields and values acceptable by the collection. More about this schema can be seen [HERE](http://mongoosejs.com/docs/guide.html).

An inportant note about the model part is that `./api/models/ModelsModule.js`, in this file is declared all the used models. It's like a register of all models running, this file is required on `./server.js`.
