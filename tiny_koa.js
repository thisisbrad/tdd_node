const Koa = require('koa');
const router = require('koa-router')();
const co = require('co');
const app = new Koa();
const data = require('./test_data/user_api.js');

router.get('/user', co.wrap(function* () {
	this.body = yield data.users.get();
}));

app.use(router.routes());
module.exports = app;