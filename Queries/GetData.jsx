import { gql } from '@apollo/client';

export default GET_USER = gql`  
  query GetUser($UserId: ID!) {
    User(id: $UserID) {
      id
      Nome
      Cognome
      Corso
      Photo
      }
  }
`;


