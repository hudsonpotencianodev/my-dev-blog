import axios, { InternalAxiosRequestConfig } from 'axios';

const graphqlApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_URL as string,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  }
});

graphqlApi?.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string;
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default graphqlApi;
