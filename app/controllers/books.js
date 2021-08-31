import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
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