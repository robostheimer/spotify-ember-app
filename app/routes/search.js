import Ember from 'ember';

export default Ember.Route.extend({
  inputContent: 'michael jackson',
  searchTerm: Ember.computed('inputContent', function() {
      return this.get('inputContent');
  }),

  model(params) {
      let url = 'https://api.spotify.com/v1/search?q='+params.musician+'&type=artist';
      return new Ember.RSVP.Promise(function(resolve,reject) {
        Ember.$.getJSON(url).then(function(data){
          Ember.run(function() {
            data.artists.items.forEach(function(item){
              if(item.images.length > 0) {
                item.image = item.images[0].url;
              }
                console.log(data.artists.items);
            });

            console.log(data.artists.items);
            resolve(data.artists.items)
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
