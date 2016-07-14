import Ember from 'ember';

const SCOPE = 'playlist-modify-private playlist-modify-public';
const CLIENT_ID = '6e385b2a58fa42f6832a3a0bc3152c23';

export default Ember.Route.extend({

  model(params) {
    var url = 'https://api.spotify.com/v1/recommendations?seed_artists='+params.id+'&limit=50';
    return new Ember.RSVP.Promise(function(resolve,reject) {
      Ember.$.ajax({
        url: url,
        headers: {
          'Authorization': 'Bearer ' + localStorage.token
        },
      }).then(function(data){
        data.tracksStr = ''
        data.playlist = '';
        data.artist = params.musician;
        data.showArtistName = true;
        data.type = 'Radio'
        Ember.run(function() {
          let l = data.tracks.length;
          data.tracks.forEach(function(item){
            var x = data.tracks.indexOf(item);
            item.artist = item.artists[0].name;
            console.log(item.artist)
            if(item.album.images.length>0)
            {
              item.image = item.album.images[0].url;
            }
            data.playlist+=item.id +',';
            if(x<l-1)
            {
              data.tracksStr+='spotify:track:'+item.id+',';
            } else {
              data.tracksStr+='spotify:track:'+item.id;
            }
          });
          //localStorage.tracks = localStorage.tracks;
          resolve(data)
        });
      }, function(error){
      if(error.statusText === 'Unauthorized') {
          if(window.location.hostname === 'localhost')
          {
            var http = 'http://localhost:4200/';
          } else {
            var http = 'https://robostheimer.github.io/spotify-ember-app/'
          }
          window.open('https://accounts.spotify.com/en/authorize?response_type=token&client_id='+CLIENT_ID+'&scope='+encodeURIComponent(SCOPE)+'&redirect_uri='+http)
          localStorage.pathname = http+'radio/'+params.musician+'/'+params.id
        }
      });
    });
  }
});
