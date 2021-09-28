import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
    async createSpeaker(e){
      e.preventDefault();
      let newSpeaker = this.get('store').createRecord('speaker', {
        firstName: this.get('model').get('firstName'),
        secondName: this.get('model').get('secondName'),
        lastName: this.get('model').get('lastName')
      });
      newSpeaker.serialize();
      await newSpeaker.save();
      this.transitionToRoute('speakers'); //не работает, ругается на то что сервер вернул ИД который уже присвоен кому-то
    }
  }
});
