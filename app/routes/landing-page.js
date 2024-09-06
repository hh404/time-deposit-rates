
import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LandingPageRoute extends Route {
  model() {
    return {
      selectedCurrency: 'HKD',
      newFundRates: [
        { tenor: 1, amount: '100,000 to 499,999', rate: '7.125%' },
        { tenor: 1, amount: '500,000 to 999,999', rate: '7.75%' },
        { tenor: 1, amount: '1,000,000 to 1,999,999', rate: '7.75%' },
        { tenor: 1, amount: '2,000,000 to 4,999,999', rate: '7.75%' },
        { tenor: 1, amount: '5,000,000 to 20,000,000', rate: '7.75%' },
        { tenor: 3, amount: '10,000 to 29,999', rate: '5.375%' },
        // 更多数据...
      ],
      existingFundRates: [
        { tenor: 1, amount: '100,000 to 499,999', rate: '5.125%' },
        { tenor: 3, amount: '500,000 to 999,999', rate: '5.50%' },
        // 更多数据...
      ]
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.setProperties({
      selectedCurrency: model.selectedCurrency,
      newFundRates: model.newFundRates,
      existingFundRates: model.existingFundRates,
      showNewFund: true,
    });
  }
}