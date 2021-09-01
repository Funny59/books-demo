import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  queryParams: ['search', 'tag'],
  search: '',
  tag: '',
  dataService: service('data'),

  actions: {
    async deleteBook(id){
      try {
        await this.get('dataService').deleteBook(id);
      } catch (error) {
        this.transitionToRoute('error', { error: 'Connection failed'});
      }
    }
  }
});
