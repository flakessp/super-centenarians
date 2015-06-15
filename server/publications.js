Meteor.publish('centenarians', function(){
	return Centenarians.find();
});