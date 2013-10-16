App.StoriesRoute = Ember.Route.extend({
	model: function() {
		this.get('store').findAll('story');
	}
});