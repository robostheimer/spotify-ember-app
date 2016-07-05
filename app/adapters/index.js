import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: 'https://api.spotify.com/',
  namespace: 'v1/search'
});
