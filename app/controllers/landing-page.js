import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LandingPageController extends Controller {
  @action
  onCurrencyChange(newCurrency) {
    this.set('selectedCurrency', newCurrency);
    // 根据货币选择更新数据
  }

  @action
  showNewFundRates() {
    this.set('showNewFund', true);
  }

  @action
  showExistingFundRates() {
    this.set('showNewFund', false);
  }
}