require('co-mocha');
var expect = require('chai').expect;
var data = require('../test_data/user_api');

describe('user data', function() {
	it('it should return +1 to the users', function* () {
		// console.log(`DATA1: ${users}`);
		var users = yield data.users.get();
		// console.log(`DATA2: ${users}`);
		yield data.users.save({name:'Bob'})
		var newUsers = yield data.users.get();
		// console.log(`DATA3: ${users.length}`);
		expect('newUsers').to.have.lengthOf(users.length+1);
	});
});