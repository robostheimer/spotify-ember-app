import Ember from 'ember';

export default Ember.Route.extend({
  inputContent: 'michael jackson',
  searchTerm: Ember.computed('inputContent', function() {
      return this.get('inputContent');
  }),

  model(params) {
      let url = 'https://api.spotify.com/v1/artists/'+params.id+'/related-artists';
      return new Ember.RSVP.Promise(function(resolve,reject) {
        Ember.$.getJSON(url).then(function(data){
          Ember.run(function() {
            data.artist = params.musician;
            data.artists.forEach(function(item){
              if(item.images.length > 0) {
                item.image = item.images[0].url;
              }

            });
            // if(data.artists.length>10) {
            //   data.artists = data.artists.slice(0, 9)
            // }

            resolve(data);
          });
        });
      });

  },
  // actions: {
  //   handleFilterEntry(value) {
  //     this.set('inputContent', value);
  //     console.log(this.get('inputContent'));
  //     let url = 'https://api.spotify.com/v1/search?q='+value+'&type=artist';
  //     console.log('url')
  //     return new Ember.RSVP.Promise(function(resolve,reject) {
  //       Ember.$.getJSON(url).then(function(data){
  //         Ember.run(function() {
  //           // data.artists.forEach(function(item){
  //           //   item.image = item.images[0].url;
  //           // });
  //           console.log(data.artists.items);
  //           resolve(data.artists.items)
  //         });
  //       });
  //     });
  //   }
  // }
});
