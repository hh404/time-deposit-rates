import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service session;
  @service router; // 使用 RouterService 代替 transitionToRoute

  username = '';
  password = '';

  @action
  login() {
    const { username, password } = this;
        // 打印 this 来检查它的上下文是否正确
        console.log('Current context (this):', this);
    if (username === '1' && password === '2') {
      this.session.set('isAuthenticated', true);
      this.session.set('username', this.username);
      this.router.transitionTo('landing-page');
    } else {
      alert('Invalid login');
    }
  }
}