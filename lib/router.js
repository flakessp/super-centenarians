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