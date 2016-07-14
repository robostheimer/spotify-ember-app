import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let url = 'https://api.spotify.com/v1/artists/'+params.id+'/top-tracks?country=US';
    return new Ember.RSVP.Promise(function(resolve,reject) {
      Ember.$.getJSON(url).then(function(data){
        Ember.run(function() {
          data.playlist = "";
          data.artist = data.tracks[0].artists[0].name;
          data.artistId = data.tracks[0].artists[0].id;
          data.tracksStr='';
          data.type = 'Top Tracks';
          let l = data.tracks.length;

          data.tracks.forEach(function(item){
            var x = data.tracks.indexOf(item);
            if(item.album.images.length > 0) {
              item.image = item.album.images[0].url;
            }
            if(x<l-1)
            {
              data.tracksStr+='spotify:track:'+item.id+',';
            } else {
              data.tracksStr+='spotify:track:'+item.id;
            }
            data.playlist += item.id+',';
          });
          console.log(data)
          resolve(data);
        });
      });
    });
  },

});
