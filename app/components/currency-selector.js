import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CurrencySelectorComponent extends Component {
  @action
  handleCurrencyChange(event) {
    const selectedCurrency = event.target.value;
    this.args.onCurrencyChange(selectedCurrency);
  }
}
