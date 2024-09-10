import Route from '@ember/routing/route';

export default class LoginRoute extends Route {
  model() {
    return {
      username: '',
      password: ''
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('username', model.username);
    controller.set('password', model.password);
  }
}