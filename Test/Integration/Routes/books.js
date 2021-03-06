describe('Routes Books', () => {
  const Books = app.datasource.models.Books;
  const defaultBook = {
    id: 1,
    name: 'Default Book',
    description: 'Description Book',
  };

  beforeEach(done => {
    Books.destroy({ where: {} })
      .then(() => Books.create(defaultBook))
      .then(() => {
        done();
      });
  });

  describe('Route GET /books', () => {
    it('Should return a list of books', done => {
      request
        .get('/books')
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(defaultBook.id);
          expect(res.body[0].name).to.be.eql(defaultBook.name);
          expect(res.body[0].description).to.be.eql(defaultBook.description);
          done(err);
        });
    });
  });

  describe('Route GET /books/{id}', () => {
    it('Should return a book', done => {
      request
        .get('/books/1')
        .end((err, res) => {
          expect(res.body.id).to.be.eql(defaultBook.id);
          expect(res.body.name).to.be.eql(defaultBook.name);
          expect(res.body.description).to.be.eql(defaultBook.description);

          done(err);
        });
    });
  });

  describe('Route POST /books/', () => {
    it('Should create a book', done => {
      const newBook = {
        id: 2,
        name: 'New Book',
        description: 'Description Book',
      };
      request
        .post('/books')
        .send(newBook)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(newBook.id);
          expect(res.body.name).to.be.eql(newBook.name);
          expect(res.body.description).to.be.eql(newBook.description);

          done(err);
        });
    });
  });

  describe('Route PUT /books/{id}', () => {
    it('Should update a book', done => {
      const updateBook = {
        id: 1,
        name: 'Updated Book',
        description: 'Updated Description',
      };
      request
        .put('/books/1')
        .send(updateBook)
        .end((err, res) => {
          expect(res.body).to.be.eql([1]);

          done(err);
        });
    });
  });

  describe('Route DELETE /books/{id}', () => {
    it('should delete a book', done => {
      request
        .delete('/books/1')
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);

          done(err);
        });
    });
  });
});
