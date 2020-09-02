const express = require('express');
const helmet = require('helmet')
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const sessStore = require('connect-session-knex')(session)
const usersRouter = require('./usersRM/routes');
const db = require('./data/dbconfig');

const server = express();

server.use(helmet());
server.use(logger('dev'));
server.use(cors());
server.use(express.json());
 
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "Please dont tell no one",
    store: new sessStore({
        knex: db,
        createtable: true
    })
}))
 
server.use(usersRouter)

server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;
