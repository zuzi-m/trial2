import Route from '@ember/routing/route';

/**
  The index route of the app showing a create form and U-value calculator.
*/
export default Route.extend({
  model() {
    // list of all materials
    return this.store.findAll('material');
  }
});
