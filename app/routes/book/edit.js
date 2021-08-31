import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  async model({ id }){
    let book = await this.get('dataService').getBook(id);
    if(book.coverURL)
      return EmberObject.create({
        id: id,
        title: book.title,
        author: book.author,
        pages: book.pages,
        rating: book.rating,
        coverURL: book.coverURL,
        description: book.description,
        tags: book.tags
      });
    else
    return EmberObject.create({
      id: id,
      title: book.title,
      author: book.author,
      pages: book.pages,
      rating: book.rating,
      description: book.description,
      tags: book.tags
    });
  }
});
