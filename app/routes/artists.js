import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'https://api.spotify.com/v1/artists?ids='+params.ids;
    var artists={}

    return new Ember.RSVP.Promise(function(resolve,reject) {
      Ember.$.getJSON(url).then(function(data){
        Ember.run(function() {
          data.artists.forEach(function(item){
            item.image = item.images[0].url;
          });
          console.log(data.artists)
          resolve(data.artists)
        });
      });
    });
  }
});
