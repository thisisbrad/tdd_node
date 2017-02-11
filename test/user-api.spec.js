require('co-mocha');

describe('user data', function() {
	it('it should return +1 to the users', function* () {
		var users = yield data.users.get();
		yield data.users.save({name:'Bob'})
		var newUsers = yield data.users.get();

		expect('newUsers').to.have.lengthOf(users.length+1);

	})
} )