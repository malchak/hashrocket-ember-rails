// http://emberjs.com/guides/models/defining-a-store/

App.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.RESTAdapter.create()
});

DS.RESTAdapter.extend({
	namespace: 'api/v1',
	plurals: { story: 'stories' }
});