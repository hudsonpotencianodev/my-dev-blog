const postQuery = (id: string) => `
query {
    blogPost(id: "${id}") {
      sys {
        id
      }
      title
      publishedDate
      content{json}
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
  
`;

export default postQuery;
