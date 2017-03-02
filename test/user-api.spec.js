require('co-mocha');
const expect  = require('chai').expect;
const data    = require('../test_data/user_api');
const fs      = require('co-fs');
const tinyKoa = require('../tiny_koa.js');
const request = require('supertest').agent(tinyKoa.listen());

before(function* (){
	yield fs.writeFile('./test_data/user.json', '[]')
});

describe('user unit tests', function() {
	it('it should return +1 to the users', function* () {
		const users = yield data.users.get();
		yield data.users.save({name:'Bob'})
		const newUsers = yield data.users.get();
		expect(newUsers).to.have.lengthOf(users.length+1);
	});
});

describe('user intergration tests', function() {
	it('it should return +1 to the users', function* () {
		const res = yield request.get('/user').expect(200);
		const users = res.body;
		yield data.users.save({name:'Brad'});
		const newres = yield request.get('/user').expect(200);
		const newUsers = newres.body;
		expect(newUsers).to.have.lengthOf(users.length+1);
	});
});