import { gql, useQuery } from "@apollo/client";
import { logUserOut } from "../apollo";

function Home() {
  return <button onClick={logUserOut}>Logout</button>;
}
export default Home;
