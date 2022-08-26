import { gql } from '@apollo/client';

export const COUNTRIES_QUERY = gql`
    query countries($filter: CountryFilterInput) {
        countries(filter: $filter) {
        code
        name
        currency
        continent {
          code
          name
      }
        languages {
            code
            name
        }
        capital
    }
}
`;

export default COUNTRIES_QUERY;