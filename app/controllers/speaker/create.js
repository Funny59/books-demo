import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async createSpeaker(e){
      e.preventDefault();

      await this.get('dataService').createSpeaker({

        firstName: this.get('model').get('firstName'),
        secondName: this.get('model').get('secondName'),
        lastName: this.get('model').get('lastName')
      });
      this.transitionToRoute('speakers');
    }
  }
});
