import Ember from 'ember';

const CLIENT_ID = '6e385b2a58fa42f6832a3a0bc3152c23';
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
  },

});
