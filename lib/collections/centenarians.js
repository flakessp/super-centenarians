Centenarians = new Mongo.Collection('centenarians');

Meteor.methods({
	centenarianInsert: function(centenarianAttributes){
		check(Meteor.userId(),String);
		check(centenarianAttributes,{
			name: String,
			dateBirth: String,
			age: String,
			state: String,
			ethnicity: String,
			lifestyle: String,
			biography: String
		});
		
		var user = Meteor.user();
		var centenarian = _.extend(centenarianAttributes,{
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});

		var centenarianId = Centenarians.insert(centenarian);
		return{
			_id: centenarianId
		};
	}
});