/**
 * Created by breselman on 12/26/15.
 */

var config = {};

config.server = {};
config.mongoizer = {};

config.server.port = 8001;

config.mongoizer.host = 'localhost';
config.mongoizer.port = 27017;
config.mongoizer.dbName = 'local';
config.mongoizer.collectionName = 'squares';



module.exports = config;
