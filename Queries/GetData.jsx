import { gql } from '@apollo/client';

export default GET_USER = gql`  
  query GetUser {
    User {
      id
      Nome
      Cognome
      Corso
      Photo
      }
  }
`;


