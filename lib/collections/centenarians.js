Centenarians = new Mongo.Collection('centenarians');

Centenarians.allow({
	insert: function(userId, doc){
		//allow posting content for registered user
		return !! userId;
	}
});