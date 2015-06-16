Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('mainPage', {path:'/'});
	this.route('aboutRulesPage', {path:'/about'});
	this.route('awardsPage', {path:'/awards'});
	this.route('contactsPage', {path:'/contacts'});

	this.route('centenarianPage',{
		path:'/profile/:_id',
		data: function() { return Centenarians.findOne(this.params._id);}
	});

	this.route('centenarianEdit',{
		path:'/profile/:_id/edit',
		data: function() { return Centenarians.findOne(this.params._id);}
	});
});


Router.route('/submit', {name:'centenarianSubmit'});

var requireLogin = function() {
	if (! Meteor.user()) {
		this.render('accessDenied');
	} else {
		this.next();
	}
}

Router.onBeforeAction(requireLogin,{only:'centenarianSubmit'});