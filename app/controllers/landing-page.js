import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LandingPageController extends Controller {
  @service intl;

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

  // 使用箭头函数确保 this 上下文正确绑定
  changeLanguage = (locale) => {
    this.intl.setLocale([locale]);
  };
}
