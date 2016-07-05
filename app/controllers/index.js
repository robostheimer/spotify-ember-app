import Ember from 'ember';

export default Ember.Controller.extend({
  inputContent:'',
  actions: {
    handleFilterEntry(value) {
      data.artists.items = {};
      let url = 'https://api.spotify.com/v1/search?q='+value+'&type=artist';
      console.log('url')
      return new Ember.RSVP.Promise(function(resolve,reject) {
        Ember.$.getJSON(url).then(function(data){
          Ember.run(function() {
            // data.artists.forEach(function(item){
            //   item.image = item.images[0].url;
            // });
            console.log(data.artists.items)
            data.artists.items = resolve(data.artists.items)
          });
        });
      });

    }
  }
});
