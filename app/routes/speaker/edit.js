import Route from '@ember/routing/route';

export default Route.extend({
  async model({ id }) {
    let speaker = await this.get('store').findRecord('speaker', id);
    return speaker;
  }
});
