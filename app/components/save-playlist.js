import Ember from 'ember';

const SCOPE = 'playlist-modify-private playlist-modify-public';
const CLIENT_ID='6e385b2a58fa42f6832a3a0bc3152c23';
const TOKEN = localStorage.token;
const TRACKS = localStorage.tracks;

export default Ember.Component.extend({
  actions: {
    savePlaylist(name) {
      console.log(name);
      return new Ember.RSVP.Promise(function(resolve,reject) {
        let url = 'https://api.spotify.com/v1/me';
        Ember.$.ajax(url, {
        		dataType: 'json',
        		headers: {
        			'Authorization': 'Bearer ' + TOKEN
        		}
        	}).then(function(data){
            let username = data.id
            let url = 'https://api.spotify.com/v1/users/'+username+'/playlists';
            Ember.$.ajax(url, {
          		type: 'POST',
          		data: JSON.stringify({
          			'name': name +' Ember App Playlist',
          			'public': false
          		}),
          		dataType: 'json',
          		headers: {
          			'Authorization': 'Bearer ' + TOKEN,
          			'Content-Type': 'application/json'
          		},
            }).then(function(data){
                let url = 'https://api.spotify.com/v1/users/'+username+'/playlists/'+data.id +'/tracks?position=0&uris='+encodeURIComponent(TRACKS);
                $.ajax(url, {
                  type: 'POST',
                  processData:false,
                  headers: {
              			'Authorization': 'Bearer ' + TOKEN,
              			'Content-Type': 'application/json'
              		},
                  success: function() {
                    alert('This '+name+'radio plalist was added to your Spotify Account!')
                  }
              });
            }, function(error){
            if(error.status === 400) {
                window.open('https://accounts.spotify.com/en/authorize?response_type=token&client_id='+CLIENT_ID+'&scope='+encodeURIComponent(SCOPE)+'&redirect_uri=http://localhost:4200');
                localStorage.pathname = window.location.pathname
              }
            });
          });
      });
    }
  }
});
