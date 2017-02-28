require('co-mocha');
const expect = require('chai').expect;
const data = require('../test_data/user_api');
const fs = require('co-fs');

before(function *(){
	yield fs.writeFile('./test_data/user.json', '[]')
})

describe('user data', function() {
	it('it should return +1 to the users', function* () {
		const users = yield data.users.get();
		yield data.users.save({name:'Bob'})
		const newUsers = yield data.users.get();
		expect(newUsers).to.have.lengthOf(users.length+1);
	});
});