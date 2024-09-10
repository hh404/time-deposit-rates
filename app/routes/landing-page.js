// app/routes/landing-page.js
import Route from '@ember/routing/route';
import fetch from 'fetch'; // 使用 ember-fetch
import { inject as service } from '@ember/service';
import { inject as routerService } from '@ember/routing/router-service';

export default class LandingPageRoute extends Route {
  @service session;
  // @routerService router; // 注入 RouterService

  // beforeModel(transition) {
  //   console.log(this); // 打印 this 以检查上下文
  //   if (!this.session.isAuthenticated) {
  //     // 使用 replaceWith 替代 transitionTo
  //     // this.router.transitionTo('login'); // 使用 router.transitionTo 来导航
  //   }
  // }

  async model() {
    // 从远程 API 获取数据
    try {
      console.log('Is authenticated:', this.session.isAuthenticated);
      const response = await fetch('http://localhost:3000/timeDepositRates');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // 将响应解析为 JSON 格式
      console.log('Fetched data:', data); // 打印获取的数据
      return data; // 将数据传递给模板
    } catch (error) {
      console.error('Fetch error:', error);
      return {}; // 返回一个空对象以防止页面崩溃
    }
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