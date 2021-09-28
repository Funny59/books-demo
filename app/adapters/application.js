import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'books-demo/config/environment';

export default JSONAPIAdapter.extend({
  host: ENV.backendURL,

  init(){
    this._super(...arguments);
    this.set('headers', {
      'Content-Type': 'application/json'
    });
  }
});
