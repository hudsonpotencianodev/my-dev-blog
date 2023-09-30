import graphqlApi from "../graphql-api";
import postListQuery from "./index.query";

const getPostList = async () => {
    const graphql = process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_URL as string;
    const response = await graphqlApi.post(graphql, {
        query: postListQuery()
    });
    return response?.data?.data?.blogPostCollection?.items;
}

export default getPostList;