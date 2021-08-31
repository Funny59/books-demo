import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set, get } from '@ember/object';

export default Controller.extend({
    dataService: service('data'),

    actions: {
    async updateBook(e){
        e.preventDefault();

        const uploadData = get(this, 'uploadData');
        await this.get('dataService').updateBook({
            id: this.get('model').get('id'),
            title: this.get('model').get('title'),
            author: this.get('model').get('author'),
            pages: this.get('model').get('pages'),
            rating: this.get('model').get('rating'),
            coverURL: this.get('model').get('coverURL'),
            description: this.get('model').get('description'),
            tags: this.get('model').get('tags')
        }, uploadData);
        this.transitionToRoute('books');
    },
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
    },
    changeUploadData(uploadData){
      set(this, 'uploadData', uploadData);
    }
  }
});
