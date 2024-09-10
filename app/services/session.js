import Service from '@ember/service';

export default class SessionService extends Service {
  isAuthenticated = false;
  username = '';
}