// app/routes/landing-page.js
import Route from '@ember/routing/route';
import { fetchMockData } from '../utils/mock-api'; // 引入 mock API

export default class LandingPageRoute extends Route {
  async model() {
    // 模拟API请求并返回数据
    const data = await fetchMockData();
    return data;
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