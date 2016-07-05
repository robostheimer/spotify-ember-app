import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handleFilterEntry(value) {
      this.set('inputContent', value);
      console.log(this.inputContent)
      return value;
    }
  }
});
