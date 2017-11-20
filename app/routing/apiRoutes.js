var bodyParser = require('body-parser');
var path = require('path');

var friendsTable = require('../data/friends.js');

module.exports = function(app) {

	app.get('/api/friends', function(req, res) {
		res.json(friendsTable);
	});

	app.post('/api/friends', function(req, res) {

		var user = req.body;
		var newFriend = -1;
		var newFriendScore = 100;
		var currentFriendScore = 0;

		for(i = 0; i < friendsTable.length; i++) {

			
				for (j = 0; j < user.scores.length; j++) {

			currentFriendScore = currentFriendScore + Math.abs(friendsTable[i].scores[j] - user.scores[j]);
		}
		if (currentFriendScore <= newFriendScore) {
			newFriend = i;
			newFriendScore = currentFriendScore;
		}
			currentFriendScore = 0;
	}
// }
friendsTable.push(user);
newFriendInfo = friendsTable[newFriend];
result.json(newFriendInfo);

});

};