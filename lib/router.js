Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('mainPage', {path:'/'});
});

Router.map(function(){
	this.route('centenarianPage',{
		path:'/profile/:_id',
		data: function() {return Centenarians.findOne(this.params._id);}
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