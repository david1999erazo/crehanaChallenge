import { gql } from '@apollo/client';

const GET_COUNTRY = gql`
  query ($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      continent {
        name
      }
      languages {
        name
      }
      capital
    }
  }
`;

export default GET_COUNTRY;