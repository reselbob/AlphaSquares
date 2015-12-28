/**
 * Created by breselman on 12/22/15.
 */
'use strict';


var mongoizer = require('./Mongoizer');

module.exports = {
    getAllAlphaSquares: getAllAlphaSquares,
    getAlphaSquare:getAlphaSquare,
    deleteAlphaSquare:deleteAlphaSquare,
    postAlphaSquare:postAlphaSquare,
    putAlphaSquare:putAlphaSquare
};

function getAllAlphaSquares(req, res) {
    console.log('AlphaSquaresImplementation.' + 'getAllAlphaSquares')
    //Get the squares from the store and publish them
    res.setHeader("content-type", "application/json");
    //res.write('getAllAlphaSquares');
    mongoizer.getSquares(function(docs){
        if(docs){
            var arr = new Array();
            for(var i=0;i<docs.length;i++){
                arr.push(makeCube(docs[i].char,docs[i].size))
            }
            res.statusCode = 200;
            res.write(JSON.stringify(arr)); res.end();
        }else{
            res.statusCode = 404;
            res.write(JSON.stringify({error:'There are no documents in the store'})); res.end();
        }
    }, function(err){
        res.statusCode = 404;
        res.write(JSON.stringify({error:err}));
        res.end();
    })

}

function getAlphaSquare(req, res) {
    console.log('AlphaSquaresImplementation.' + 'getAlphaSquare')
    var chr = req.swagger.params.alphaChar.value;
    //Get the square from the store and publish it
    mongoizer.getSquare(chr, function(result){
            res.setHeader("content-type", "application/json");
            if(result){
                var arr = makeCube(chr,result.size);
                res.statusCode = 200;
                res.write(JSON.stringify(arr));
            }else{
                res.statusCode = 404;
                res.write(JSON.stringify({error:'The character, [' + chr + '] does not exist in the store'}));
            }
            res.end();
        },
        function(err){
            res.statusCode = 404;
            res.write(JSON.stringify({error:err}));
            res.end()
        });

}

function deleteAlphaSquare(req, res) {
    console.log('AlphaSquaresImplementation.' + 'deleteAlphaSquare')
    res.setHeader("content-type", "application/json");
    var chr = req.swagger.params.alphaChar.value;
    mongoizer.deleteSquare(chr,
        function(result){
            res.statusCode = 200;
            res.write(JSON.stringify(result));
            res.end();
        },
        function(err){
            res.statusCode = 404;
            res.write(JSON.stringify({error:err}));
            res.end()
        });
}

function postAlphaSquare(req, res) {
    console.log('AlphaSquaresImplementation.' + 'postAlphaSquare')
    upsertAlphaSquare(req,res);
}

function upsertAlphaSquare(req,res){
    var chr = req.swagger.params.alphaChar.value;
    var sze = req.swagger.params.size.value;
    //check and make sure the square does not exist
    res.setHeader("content-type", "application/json");
    mongoizer.addSquare(chr,sze,function() {
            var arr = makeCube(chr,sze);
            res.statusCode = 200;
            res.write(JSON.stringify(arr));
            res.end();
        },
        function(err){
            res.statusCode = 404;
            res.write(JSON.stringify({error:err}))
            res.end();
        });
}

function putAlphaSquare(req, res) {
    console.log('AlphaSquaresImplementation.' + 'putAlphaSquare')
    upsertAlphaSquare(req,res);
}

function makeCube(chr, sze){
    var s = repeat(chr,sze);
    var arr = new Array();
    for(var i =0;i<sze;i++){
        arr.push(s) ;
    }
    return arr;
}

function repeat(str, num) {
    return (new Array(num+1)).join(str);
}

function isChar(chr){
    if ((typeof chr === 'string' || chr instanceof String) && chr.length==1){
        return true;
    }
    return false;
}

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}