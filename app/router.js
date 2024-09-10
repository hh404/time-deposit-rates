import EmberRouter from '@ember/routing/router';
import config from 'time-deposit-rates/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('landing-page');
  this.route('login');
});
