const fs = require('co-fs');
const userFile = './test_data/user.json';

module.exports = {
	users: {
		get: function* () {
			const data = yield fs.readFile(userFile, 'utf-8');
			return JSON.parse(data);
		},
		save: function* (user) { 
			const users = yield this.get();
			users.push(user);
			yield fs.writeFile(userFile, JSON.stringify(users));
		}
	}
};