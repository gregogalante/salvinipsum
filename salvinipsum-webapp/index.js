var express = require('express')
var app = express()
console.log(__dirname)
//setting middleware
app.use(express.static(__dirname + '/dist')) // Serves resources from public folder

var server = app.listen(process.env.PORT || 9000)