Template.centenarianEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentCentenarianId = this._id;

		var centenarianProperties = {
			name: $(e.target).find('[name=name]').val(),
			dateBirth: $(e.target).find('[name=dateBirth]').val(),
			age: $(e.target).find('[name=age]').val(),
			state: $(e.target).find('[name=state]').val(),
			ethnicity: $(e.target).find('[name=ethnicity]').val(),
			lifestyle: $(e.target).find('[name=lifestyle]').val(),
			biography: $(e.target).find('[name=biography]').val()
		}

		Centenarians.update(currentCentenarianId, {$set: centenarianProperties}, function(error){
			if(error){
				alert(error.reason);
			} else {
				Router.go('centenarianPage',{_id:currentCentenarianId});
			}
		});
	},

	'click .delete': function(e) {
		e.preventDefault();

		if(confirm("Delete this post?")) {
			var currentCentenarianId = this._id;
			Centenarians.remove(currentCentenarianId);
			Router.go('mainPage');
		}
	}
})