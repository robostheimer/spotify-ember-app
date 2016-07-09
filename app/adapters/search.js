import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.spotify.com/',
  namespace: 'v1/search'
});
