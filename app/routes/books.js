import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },
    tag: {
      refreshModel: true
    }
  },
  dataService: service('data'),

  model({ search, tag }){
    let promise = new Promise((resolve, reject) => {
      later(async () => {
        try {
          //let books = search ? await this.get("dataService").getBooks(search, tag) : await this.get("dataService").getBooks();
          let books = await this.get("dataService").getBooks(search, tag);
          resolve(books);
        }
        catch (e) {
          reject('Connection failed');
        }
      }, 1000);
    }).
    then((books) => {
      this.set('controller.model', books);
    }).
    finally(() => {
      if (promise === this.get('modelPromise')) {
        this.set('controller.isLoading', false);
      }
    });
    this.set('modelPromise', promise);
    return { isLoading: true };
    //return search ? this.get('dataService').getSpeakers(search) : this.get('dataService').getSpeakers();
  },

  setupController(controller, model) {
    this._super(...arguments);
    if (this.get('modelPromise')) {
      controller.set('isLoading', true);
    }
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
