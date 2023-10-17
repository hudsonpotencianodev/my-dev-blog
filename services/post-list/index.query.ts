const postListQuery = () => `
query {
  blogPostCollection {
    total
    skip
    limit
    items {
      sys {
        id
      }
      title
      author {
        name
        avatar {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
}

`;

export default postListQuery;
