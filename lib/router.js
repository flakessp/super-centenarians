Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('mainPage', {path:'/'});
});

Router.map(function(){
	this.route('centenarianPage',{
		path:'/profile/:_id',
		data: function() {Centenarian.findOne(this.params._id);}
	});
});