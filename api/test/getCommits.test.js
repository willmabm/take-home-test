const supertest = require('supertest')
const { app, server } = require('../index')

const api = supertest(app)

test('commits are returned ', async () => {
  await api
    .get('/commits')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(() => {
  server.close()
})
