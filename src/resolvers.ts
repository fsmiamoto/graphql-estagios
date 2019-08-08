export default {
  // Resolvers define the technique for fetching the types in the
  // schema.  We'll retrieve books from the "books" array above.
  Query: {
    books: () => [
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling"
      },
      {
        title: "Jurassic Park",
        author: "Michael Crichton"
      }
    ]
  }
}
