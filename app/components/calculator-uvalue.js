import Component from '@ember/component';
import { computed } from '@ember/object';

/**
  U-Value calculator component showing a list of materials, inside and outside
  surface constants and a hook to delete materials. Computes the total
  resistivity of displayed items (constants + materials) and resulting U-Value.

  @class CalculatorUvalue
*/
export default Component.extend({
  /**
    Total resistivity of constants and materials displayed in the component.
    The total resistivity just sums up all the resitivities of materials plus
    constants.

    @property totalResistivity
    @type {Number}
  */
  totalResistivity: computed('materials.length', 'outsideSurface', 'insideSurface', function() {
    // accumulate the sum of all resitivities, start with the constants
    let sum = this.get('outsideSurface') + this.get('insideSurface');

    // add the materials to the sum
    let materials = this.get('materials');
    if (materials) {
      materials.forEach((material) => {
        sum += material.resistivity;
      });
    }
    return sum;
  }),

  /**
    Computed U-Value of the constants and materials displayed in the component.
    Computed as inverse of `totalResistivity`.

    @property uValue
    @type {Number}
  */
  uValue: computed('totalResistivity', function() {
    // just compute the inverse
    return 1.0 / this.get('totalResistivity');
  }),

  actions: {
    /**
      Handles the delete of a material that is done by calling its action passed
      here by a parameter. Does nothing if the action is not defined.

      @method deleteMaterial
      @param {Material} material record to delete.
      @return nothing
    */
    deleteMaterial(material) {
      // check if the delete action is defined
      if (this.onDeleteAction) {
        // call the delete action
        this.onDeleteAction(material);
      }
    }
  }
});
