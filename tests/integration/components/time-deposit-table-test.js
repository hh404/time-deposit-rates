import { module, test } from 'qunit';
import { setupRenderingTest } from 'time-deposit-rates/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | time-deposit-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TimeDepositTable />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TimeDepositTable>
        template block text
      </TimeDepositTable>
    `);

    assert.dom().hasText('template block text');
  });
});
