import { useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./../apollo";
import { gql } from "@apollo/client";

const ME_QUERY = gql`
  query {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data, error } = useQuery(ME_QUERY, {
    skip: !hasToken,
  });

  return data;
}

export default useUser;
