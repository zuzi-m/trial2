import Controller from '@ember/controller';

/**
  Controller of the application handling the actions that are available for user
  and handles the results.
*/
export default Controller.extend({
  actions: {
    /**
      Creates a material record in the store with given attributes.

      @method createMaterial
      @param attributes - hash with attributes of material to create.
      @return promise from saving the material in the store.
    */
    createMaterial(attributes) {
      // create & save material, refresh is not needed because result is cached
      return this.store.createRecord('material', attributes).save();
    },

    /**
      Deletes a material record from the store.

      @method deleteMaterial
      @param material - material record to delete.
    */
    deleteMaterial(material) {
      // destroys the record, refresh is not needed because result is cached
      material.destroyRecord();
    }
  }
});
