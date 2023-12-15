import { gql } from '@apollo/client';

export default GET_USER = gql`  
  query GetUser($UserId: ID!) {
    user(id: $UserID) {
      id
      nome
      cognome
      corso
      photo
      }
  }
`;


