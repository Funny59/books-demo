import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  model(){
    return this.get('dataService').getSpeakers();
    //return new Promise((resolve, reject) => {
      //later(async () => {
      //  try {
      //    let authors = this.get('dataService').getSpeakers();
      //    resolve(authors);
      //  } catch (e) {
      //    reject('Connection failed');
      //  }
      //}, 3000);
    //});
  },

  actions: {
    //didTransition(){
    //  this.refresh();
    //}
  }
});
