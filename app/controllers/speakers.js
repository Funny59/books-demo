import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['search'],
  search: '',

  actions: {
    async deleteSpeaker(id){

      try {
        let post = this.get('store').peekRecord('speaker', id);
        await post.destroyRecord();
      } catch (error) {
        this.transitionToRoute('error', { error: 'Connection failed'});
      }
    }
  }
});
