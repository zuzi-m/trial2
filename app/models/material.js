import DS from 'ember-data';
import { computed } from '@ember/object';

/**
  Material model with required attributes.

  @class Material
*/
export default DS.Model.extend({
  name: DS.attr('string'),
  thickness: DS.attr('number'),
  kvalue: DS.attr('number'),

  /**
    Resistivity computed as `thickness` / `kvalue`

    @property resistivity
    @type {Number}
  */
  resistivity: computed('thickness', 'kvalue', function() {
    return this.get('thickness') / this.get('kvalue');
  })
});
