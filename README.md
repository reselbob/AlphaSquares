# AlphaSquares
AlphaSquares is a REST application that demonstrates key features of Swagger, particularly API definition and code generation.

This application exposes API endpoints that create, update, delete and get alphaSquares.

An alphaSquare is a text based square made up of an alphabetic character this is repeated X times over X rows.

You create an alphaSquare in the POST method and update a given alphaSquare in the PUT method.

The syntax for creating an alphaSquare is, ```www.mydomain.com/v1/{alphaChar}/{size}```

WHERE

<b>{alphaChar}</b> is the character uponw which to build the square

<b>{size}</b> is the width and height of an alphaSquare.

THUS

Doing a POST on 
```
www.mydomain.com/v1/b/5
```
will produce an alphaSquare as follows

bbbbb<br />
bbbbb<br />
bbbbb<br />
bbbbb<br />
bbbbb

Please note</b>, characters are case senstive

##Installation
This application is a NodeJS and requires that MongoDB be installed and running on the system on which the application will run.

The default configuration settings for connecting to MongoDB are:
```
host = 'localhost'
port = '27017'
database name = 'local'
alpha squares collection = 'squares'
```
Configuration settings are defined in the file, /controllers/config.js

Once you have the code installed on your system, run:

```
npm install
node .
```
from the root directory of the application. The root directory is the one that contains index.js.

AlphaSquares runs on port 8001

## Using Swagger
This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [swagger-spec](https://github.com/swagger-api/swagger-spec) from a remote server, you can easily generate a server stub.  This is an example of building a node.js server.

Once the application is up and running you can view interactive documentation about the API at:

```
open http://localhost:8001/docs
```

This project leverages [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.