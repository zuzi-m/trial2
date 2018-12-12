import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  formattedNumber: computed('value', 'precision', function() {
    // check if there is some value to show
    let value = this.get('value');
    if (!value) {
      return "-";
    }

    // check the precision to target
    let multiply = Math.pow(10, this.get('precision'));

    // show the value with given precision by rounding the multiplied number
    return Math.round(value * multiply) / multiply;
  })
});
