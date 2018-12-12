import Component from '@ember/component';

/**
  Form for creating/editing a material record.

  @class FormMaterial
*/
export default Component.extend({
  /**
    Empty object to be used for specifying a new material.

    @property model
    @type {Object}
  */
  model: null,

  /**
    Flag used to disable the create button.

    @property saveDisabled
    @type {Boolean}
  */
  saveDisabled: false,

  init() {
    this._super(...arguments);
    // initializing the model to empty hash
    this.set('model', {});
  },

  actions: {
    /**
      Action to create a new material with attributes specified in the form.
      Triggers create action if one is specified and if save is enabled.
      Disables save button until the save action is finished and then resets.

      @method createMaterial
      @return nothing
    */
    createMaterial() {
      // check if it is allowed to save
      if (this.onCreateAction && !this.saveDisabled) {
        // disable save until it is finished
        this.toggleProperty('saveDisabled');

        // call the onCreate action
        this.onCreateAction(this.get('model')).then(() => {
          // enable save again
          this.toggleProperty('saveDisabled');
          // reset the model's attributes
          this.set('model', {});
        });
      }
    }
  }
});
