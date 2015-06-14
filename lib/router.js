Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('mainPage', {path:'/'});
});

Router.map(function(){
	this.route('centenarianPage',{path:'/centenarian'});
});