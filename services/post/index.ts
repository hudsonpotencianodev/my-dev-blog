import graphqlApi from "../graphql-api";
import postQuery from "./index.query";

const getPost = async (id: string) => {
    const graphql = process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_URL as string;
    const response = await graphqlApi.post(graphql, {
        query: postQuery(id)
    });
    return response?.data?.data?.blogPost;
}

export default getPost;