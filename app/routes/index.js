import Ember from 'ember';

const CLIENT_ID = '6e385b2a58fa42f6832a3a0bc3152c23';
const SCOPE = 'playlist-modify-private playlist-modify-public';

//let time = Date.now();
//console.log(time)
export default Ember.Route.extend({
  beforeModel() {

    if(location.hash)
    {
      let hashObj =[];
      let hash = window.location.hash.substr(1);
      let hashArr = hash.split('&');
      let token = hashArr[0].split('=')[1];
      let tokenType = hashArr[1].split('=')[1];

      localStorage.setItem('token', token);
      localStorage.setItem('tokenType', tokenType);
      window.close();
      window.opener.location = localStorage.pathname;
    }

    if(window.location.hostname === 'localhost')
    {
      var http = 'http://localhost:4200/';
    } else {
      var http = 'https://robostheimer.github.io/spotify-ember-app/'
    }
    if(!localStorage.authenticated) {
      window.open('https://accounts.spotify.com/en/authorize?response_type=token&client_id='+CLIENT_ID+'&scope='+encodeURIComponent(SCOPE)+'&redirect_uri='+http);
      localStorage.pathname = http;
      localStorage.authenticated=true;
    }
  }
});
