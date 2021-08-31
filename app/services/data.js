import Service from '@ember/service';
import ENV from 'books-demo/config/environment';

export default Service.extend({
  getSpeakers(search){
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
    }

    return fetch(`${ENV.backendURL}/speakers${queryParams}`).then((response) => response.json());
  },
  getSpeaker(id){
    return fetch(`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
  },
  deleteSpeaker(id) {
    return fetch(`${ENV.backendURL}/speakers/${id}`, { method: 'DELETE' });
  },
  updateSpeaker(speaker){
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },
  createSpeaker(speaker){
    return fetch(`${ENV.backendURL}/speakers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },

  getBooks(search) {
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
    }

    return fetch(`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
  },

  getBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
  },

  deleteBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`, { method: 'DELETE' });
  },

  async createBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(`${ENV.backendURL}/books`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        });

        const savedBook = await savedBookPromise.json();

        uploadData.url = `${ENV.fileUploadURL}`;
        // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {
            const dataToUpload = {
              entityName: 'books',
              id: savedBook.id,
              fileName: result.filename
            };

            await fetch(`${ENV.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });

            resolve();
          }
          catch (e) {
            reject(e);
          }
        }).fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
      }
      catch (e) {
        reject(e);
      }
    });
  },

  async updateBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(`${ENV.backendURL}/books/${book.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        });

        const savedBook = await savedBookPromise.json();
        if (uploadData) {
          uploadData.url = `${ENV.fileUploadURL}`;
          // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
          uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
            try {
              const dataToUpload = {
                entityName: 'books',
                id: savedBook.id,
                fileName: result.filename
              };

              await fetch(`${ENV.backendURL}/saveURL`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToUpload)
              });

              resolve();
            }
            catch (e) {
              reject(e);
            }
          }).fail((jqXhr, textStatus, errorThrown) => {
            reject(errorThrown);
          });
        }
      }
      catch (e) {
        reject(e);
      }
    });
  }
});
