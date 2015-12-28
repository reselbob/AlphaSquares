'use strict';

var url = require('url');


var AlphaSquare = require('./AlphaSquareService');


module.exports.getAllAlphaSquares = function getAllAlphaSquares (req, res, next) {
  AlphaSquare.getAllAlphaSquares(req.swagger.params, res, next);
};

module.exports.alphaCharGet = function alphaCharGet (req, res, next) {
  AlphaSquare.alphaCharGet(req.swagger.params, res, next);
};

module.exports.alphaCharDelete = function alphaCharDelete (req, res, next) {
  AlphaSquare.alphaCharDelete(req.swagger.params, res, next);
};

module.exports.alphaCharSizePut = function alphaCharSizePut (req, res, next) {
  AlphaSquare.alphaCharSizePut(req.swagger.params, res, next);
};

module.exports.alphaCharSizePost = function alphaCharSizePost (req, res, next) {
  AlphaSquare.alphaCharSizePost(req.swagger.params, res, next);
};
