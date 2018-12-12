import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | number-formatter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{number-formatter value=10 precision=0}}`);

    assert.equal(this.element.textContent.trim(), '10');

    // Template block usage:
    await render(hbs`
      {{#number-formatter value=10 precision=0}}m/s{{/number-formatter}}
    `);

    assert.equal(this.element.textContent.trim(), '10 m/s');
  });

  test('it shows no value properly', async function(assert) {
    await render(hbs`{{number-formatter}}`);

    assert.equal(this.element.textContent.trim(), '-');
  });

  test('it shows different values and precisions', async function(assert) {
    await render(hbs`{{number-formatter value=10.123456 precision=2}}`);

    assert.equal(this.element.textContent.trim(), '10.12');

    await render(hbs`{{number-formatter value=10.123456 precision=0}}`);

    assert.equal(this.element.textContent.trim(), '10');

    await render(hbs`{{number-formatter value=10.123456 precision=4}}`);

    assert.equal(this.element.textContent.trim(), '10.1235');
  });
});
