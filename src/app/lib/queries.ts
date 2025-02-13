import { gql, GraphQLClient } from "graphql-request";
import { Page } from "./types";
const baseUrl = process.env.WPS_URL;
const client = new GraphQLClient(`${baseUrl}/graphql`);

export const GET_SECTIONS = gql`
  query GetSections {
    pages(first: 10) {
      nodes {
        id
        title
        content
      }
    }
  }
`;

export const fetchSections = async (): Promise<Page[]> => {
  const data = await client.request<{ sections: { nodes: Page[] } }>(
    GET_SECTIONS
  );
  return data.sections.nodes;
};
