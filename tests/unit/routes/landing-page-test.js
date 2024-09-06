import { module, test } from 'qunit';
import { setupTest } from 'time-deposit-rates/tests/helpers';

module('Unit | Route | landing-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:landing-page');
    assert.ok(route);
  });
});
