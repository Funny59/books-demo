import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import EmberObject from '@ember/object';

export default Route.extend({
  dataService: service('data'),

  async model({ id }) {
    let speaker = await this.get('dataService').getSpeaker(id);
    return EmberObject.create({
      id: speaker.id,
      lastName: speaker.lastName,
      firstName: speaker.firstName,
      secondName: speaker.secondName
    });
  }
});
