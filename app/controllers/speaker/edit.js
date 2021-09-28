import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async updateSpeaker(e){
      e.preventDefault();
      let speaker = await this.store.findRecord('speaker', this.get('model.id'))
      console.log(speaker);
      speaker.set('firstName', this.get('model.firstName'));
      speaker.set('lastName', "14331243");
      speaker.set('secondName', this.get('model.secondName'));
      console.log(speaker);
      speaker.serialize();
      speaker.save();
      this.transitionToRoute('speakers');
    }
  }
});

