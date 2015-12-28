'use strict';

exports.getAllAlphaSquares = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "squareChar" : "aeiou",
  "square" : [ "aeiou" ]
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.alphaCharGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * alphaChar (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "squareChar" : "aeiou",
  "square" : [ "aeiou" ]
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.alphaCharDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
   * alphaChar (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "deleteTime" : "2015-12-23T02:10:53.365+0000",
  "alphaChar" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.alphaCharSizePut = function(args, res, next) {
  /**
   * parameters expected in the args:
   * alphaChar (String)
   * size (Integer)
   **/

var examples = {};
  
  examples['application/json'] = {
  "squareChar" : "aeiou",
  "square" : [ "aeiou" ]
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.alphaCharSizePost = function(args, res, next) {
  /**
   * parameters expected in the args:
   * alphaChar (String)
   * size (Integer)
   **/

var examples = {};
  
  examples['application/json'] = {
  "squareChar" : "aeiou",
  "square" : [ "aeiou" ]
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
