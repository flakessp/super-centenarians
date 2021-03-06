Centenarians = new Mongo.Collection('centenarians');

Centenarians.allow({
	update: ownsDocument,
	remove: ownsDocument
});

Centenarians.deny({
	update: function(userId, centenarian, fieldNames){
		return (_.without(fieldNames,'name','dateBirth','age','state','ethnicity','lifestyle','biography').length>0);
	}
});

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

		var centenarianWithSameName = Centenarians.findOne({name:centenarianAttributes.name});
		if (centenarianWithSameName) {
			return{
				centenarianExists: true,
				_id: centenarianWithSameName._id
			}
		}
		
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