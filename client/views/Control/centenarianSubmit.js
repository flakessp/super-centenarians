Template.centenarianSubmit.events({
	'submit form':function(e) {
		e.preventDefault();

		var centenarian = {
			name: $(e.target).find('[name=name]').val(),
			dateBirth: $(e.target).find('[name=dateBirth]').val(),
			age: $(e.target).find('[name=age]').val(),
			state: $(e.target).find('[name=state]').val(),
			ethnicity: $(e.target).find('[name=ethnicity]').val(),
			lifestyle: $(e.target).find('[name=lifestyle]').val(),
			biography: $(e.target).find('[name=biography]').val()
		};


		Meteor.call('centenarianInsert', centenarian, function(error, result){
			if(error)
				return alert(error.reason);
			Router.go('centenarianPage',{_id: result._id});
		});
	}
});