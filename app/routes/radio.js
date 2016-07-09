import Ember from 'ember';

const CLIENT_ID = '6e385b2a58fa42f6832a3a0bc3152c23';

export default Ember.Route.extend({

  model(params) {
    var url = 'https://api.spotify.com/v1/recommendations?seed_artists='+params.id+'&limit=100';
    return new Ember.RSVP.Promise(function(resolve,reject) {
      Ember.$.ajax({
        url: url,
        headers: {
          'Authorization': 'Bearer ' + localStorage.token
        },
      }).then(function(data){
        data.playlist = '';
        Ember.run(function() {
          data.tracks.forEach(function(item){
            item.image = item.album.images[0].url;
            data.playlist+=item.id +',';
          });
          resolve(data)
        });
      }, function(error){
      if(error.statusText === 'Unauthorized') {
          window.open('https://accounts.spotify.com/en/authorize?response_type=token&client_id='+CLIENT_ID+'&redirect_uri=http://localhost:4200');
          localStorage.pathname = 'radio/'+params.id
        }
      });
    });
  }
});
