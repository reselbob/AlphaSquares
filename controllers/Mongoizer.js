'use strict';
var config = require('./../config');
var Db = require('mongodb').Db,
    Server = require('mongodb').Server
var host = config.mongoizer.host;
var port = config.mongoizer.port;
var collectionName = config.mongoizer.collectionName;
var dbName =config.mongoizer.dbName;

module.exports = {
    addSquare: addSquare,
    deleteSquare:deleteSquare,
    getSquare:getSquare,
    getSquares:getSquares,
    intialize:intialize
};
/*
 Adds a specific square's data to the store
 chr: the character of the square data to save
 sze: the size of the square
 */
function addSquare(chr, sze,next, errfunc) {
    console.log('adding square char:' + chr + ' size:' + sze);
    var db = new Db(dbName, new Server(host, port));
    db.open(function(err, db){
        // Fetch the collection
        var collection = db.collection(collectionName);
        collection.save({_id:chr,char:chr, size:sze}, {w: 1}, function(err, result) {
            db.close();
            if(err){
                errfunc(err);
            }else{
                next();
            }
        });

    });
};
/*
 Deletes a specific square's data
 chr: the character of the square data to delete
 */
function deleteSquare(chr,next,errfunc) {
    console.log('deleting square ' + chr);
    var db = new Db(dbName, new Server(host, port));
    db.open(function (err, db) {
        if(err){
            db.close();
            errFunc(err);
        }
        db.collection(collectionName, function (err, col) {
            if (err) {
                db.close();
                errfunc(err);
            } else {
                col.findAndRemove({_id: chr}, function (err, result) {
                    db.close();
                    if (err) {
                        errFunc(err);
                    }else{
                        next(result);
                    }
                });
            }
        });

    });
};
/*
Gets a specific square's data
chr: the character of the square data to retrieve
 */
function getSquare(chr, next, errfunc) {
    console.log('getting square ' + chr);
    var db = new Db(dbName, new Server(host, port));
    db.open(function(err, db){
        // Fetch the collection
        var collection = db.collection(collectionName,function(err, item) {
            if(err){
                errfunc(err);
            }else{
                item.findOne({_id:chr,char:chr},function(err, result) {
                    db.close();
                    if(err){
                        errfunc(err);
                    }else{
                        next(result);
                    }
                });
            }
        });
    });
};

/*
Gets all the squares in the data store
 */
function getSquares(next, errfunc) {
    console.log('getting squares');
    var db = new Db(dbName, new Server(host, port));
    db.open(function(err, db){
        if(err){
            errfunc(err);
        }else{
            var cursor = db.collection(collectionName).find().sort({char:1});
            var arr = new Array();
            cursor.each(function(err, item) {
                // If the item is null then the cursor is exhausted/empty and closed
                if(item == null) {
                    db.close();
                    next(arr);

                }else{
                    arr.push(item)
                }
            });
        }
    });
};

/*
The method checks to see that the DB is operational, and
that the required collection exists. If the collection does not
exist, it's made.
 */
function intialize(next, errfunc) {
    var db = new Db(dbName, new Server(host, port));
    db.open(function(err, db){
        if(err){
            errfunc({message:'Cannot open MongoDB Database',error:err});
        }else{
            db.listCollections({name: collectionName})
                .next(function(err, collinfo) {
                    if (collinfo) {
                        // The collection exists, leave town
                        next();
                    }else{
                        //The collection does not exist, make it
                        db.createCollection(collectionName, function(err, collection){
                            db.close();
                            if (err) errfunc(err);
                            console.log('Created collection,[ ' + collectionName + "] in database, [" + dbName + ']');
                        });
                    }
                });
        }

    });
};



