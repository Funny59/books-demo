import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('books');
  this.route('speakers');
  this.route('edit-speaker', {path: '/edit-speaker/:id'});
  this.route('edit-book');
  this.route('404', {path: '*path'});
  this.route('error', {path: '/:error'});

  this.route('speaker', function() {
    this.route('create');
    this.route('edit', {path:'/edit/:id'});
  });

  this.route('book', function() {
    this.route('create');
    this.route('edit', {path:'/edit/:id'});
  });
});
