import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  formattedNumber: computed('value', 'precision', function() {
    let value = this.get('value');
    if (!value) {
      return "-";
    }
    
    let precision = this.get('precision');
    let multiply = Math.pow(10, this.get('precision'));

    return Math.round(value * multiply) / multiply;
  })
});
