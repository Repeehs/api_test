/**
 * Created by bioz on 1/13/2017.
 */
// our components
const bookService = require('../services/book.service');

module.exports = function (app) {
    app.get('/api/v1/books', bookService.getAll);
    /**
     * @api {GET} /api/v1/books Get All
     * @apiVersion 1.0.0
     * @apiName getAll
     * @apiGroup Books
     * @apiPermission Every type of user
     *
     * @apiDescription Get all books
     *
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/books
     *
     *
     *
     * @apiError invalid input data
     *
     */
    app.get('/api/v1/books/:id', bookService.getOne);
    /**
     * @api {GET} /api/v1/books/:id Get one
     * @apiVersion 1.0.0
     * @apiName getOne
     * @apiGroup Books
     * @apiPermission Every type of user
     *
     * @apiDescription Get one book
     *
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/books/:id
     *
     *
     *
     * @apiError invalid input data
     *
     */
    app.post('/api/v1/auth/books', bookService.create);
    /**
     * @api {POST} /api/v1/books Create book
     * @apiVersion 1.0.0
     * @apiName CreateOne
     * @apiGroup Books
     * @apiPermission Every type of user
     *
     * @apiDescription Create one book
     *
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/auth/books
     *
     *
     *
     * @apiError invalid input data
     *
     */
    app.put('/api/v1/auth/books/:id', bookService.update);
    /**
     * @api {PUT} /api/v1/books/:id Update 1 book
     * @apiVersion 1.0.0
     * @apiName UpdateOne
     * @apiGroup Books
     * @apiPermission Every type of user
     *
     * @apiDescription Update one book
     *
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/auth/books/:id
     *
     *
     *
     * @apiError invalid input data
     *
     */
    app.delete('/api/v1/auth/books/:id', bookService.delete);
    /**
     * @api {DELETE} /api/v1/books/:id Delete a book
     * @apiVersion 1.0.0
     * @apiName DeleteOne
     * @apiGroup Books
     * @apiPermission Every type of user
     *
     * @apiDescription Delete one book
     *
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/auth/books/:id
     *
     *
     *
     * @apiError invalid input data
     *
     */
};
