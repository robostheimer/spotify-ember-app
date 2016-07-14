import Ember from 'ember';

expandAlbumInfo: Ember.computed(function(){
  return false;
})

export default Ember.Component.extend({
  actions: {
    toggleAlbumInfo() {
      this.toggleProperty('expandAlbumInfo')
    },
    changeOrder() {
      alert('changed')
    }
  }
});
