import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      let url = 'https://api.spotify.com/v1/artists/'+params.id+'/top-tracks?country=US';
      return new Ember.RSVP.Promise(function(resolve,reject) {
        Ember.$.getJSON(url).then(function(data){
          Ember.run(function() {
            data.artist = data.tracks[0].artists[0].name;
            data.tracks.forEach(function(item){
              if(item.album.images.length > 0) {
                item.image = item.album.images[0].url;
              }
            });
            resolve(data);
          });
        });
      });

  },

});
