import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function(){
  this.route('/')
  this.route('artists', { path: 'artists/:ids' });
  this.route('search', {path: 'search/:musician'});
  this.route('related', { path: 'related/:id' });
  this.route('playlist', { path: 'playlist/:id'});
  this.route('radio', {path: 'radio/:musician/:id'});
});

export default Router;
