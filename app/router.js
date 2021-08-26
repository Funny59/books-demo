import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('books');
  this.route('speakers');
  this.route('edit-speaker');
  this.route('edit-book');
  this.route('404', {path: '*path'});
});
