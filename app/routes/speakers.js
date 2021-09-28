/* eslint-disable no-unused-vars */
import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  dataService: service('data'),

  async model({ search }){
    return await this.get('store').findAll('speaker');
  },

  setupController(controller, model) {
    this._super(...arguments);
  },

  resetController(controller, isExiting, transition) {
    this._super(...arguments);
    if (isExiting) {
      controller.set('isLoading', false);
      this.set('modelPromise', null);
    }
  },

  actions: {
    refreshAuthors() {
      this.refresh();
    },
    loading(transition, originRoute) {
      return false;
    }
  }
});
