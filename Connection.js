// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

export default client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});


