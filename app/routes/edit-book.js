import Route from '@ember/routing/route';
import { set } from '@ember/object'

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);
    set(controller, 'bookName', "");
    set(controller, 'pagesCount', null);
    set(controller, 'bookDescriptionURL', "");
    set(controller, 'uploadData', null);
    set(controller, 'tags', ['first', 'second']);
  }
});
