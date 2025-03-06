import { gql, GraphQLClient } from "graphql-request";
import { Section } from "./types";
import { SliderImage } from "./types";
import { Project } from "./types";
const baseUrl = process.env.WPS_URL;
const client = new GraphQLClient(`${baseUrl}/graphql`);

export async function getSections(): Promise<Section[]> {
  const query = gql`
    query GetSections {
      sections(first: 10) {
        nodes {
          id
          title
          content
        }
      }
    }
  `;
  try {
    const data: { sections: { nodes: Section[] } } = await client.request(
      query
    );

    if (!data.sections || !data.sections.nodes) {
      console.error("❌ GraphQL response is missing sections.nodes", data);
      return [];
    }
    return data.sections.nodes;
  } catch (err) {
    console.error("❌ GraphQL Fetch Error:", err);
    return [];
  }
}
export async function getSlider(): Promise<SliderImage[]> {
  const query = gql`
    query GetMediaImages {
      mediaItems(where: { categoryName: "slider" }, first: 10) {
        nodes {
          id
          sourceUrl
          altText
        }
      }
    }
  `;
  try {
    const data: { mediaItems: { nodes: SliderImage[] } } = await client.request(
      query
    );
    if (!data.mediaItems || !data.mediaItems.nodes) {
      console.error("❌ GraphQL response is missing sections.nodes", data);
      return [];
    }
    return data.mediaItems.nodes;
  } catch (err) {
    console.error("❌ GraphQL Fetch Error:", err);
    return [];
  }
}
export async function getCakes(): Promise<Project[]> {
  const query = gql`
    query GetProjectImages {
      mediaItems(where: { categoryName: "projekt" }, first: 20) {
        nodes {
          id
          sourceUrl
          altText
        }
      }
    }
  `;
  try {
    const data: { mediaItems: { nodes: Project[] } } = await client.request(
      query
    );
    if (!data.mediaItems || !data.mediaItems.nodes) {
      console.error("❌ GraphQL response is missing sections.nodes", data);
      return [];
    }
    return data.mediaItems.nodes;
  } catch (err) {
    console.error("❌ GraphQL Fetch Error:", err);
    return [];
  }
}
/*
export const GET_SLIDER_IMAGES = gql`
  query GetMediaImages {
    mediaItems(where: { categoryName: "slider" }, first: 10) {
      nodes {
        id
        sourceUrl
        altText
      }
    }
  }
`;
export const fetchSlider = async (): Promise<SliderImage[]> => {
  try {
    const sliderData = await client.request<{
      mediaItems: { nodes: SliderImage[] };
    }>(GET_SLIDER_IMAGES);
    return sliderData.mediaItems.nodes;
  } catch (err) {
    console.error("❌ Slider Images Fetch Error:", err);
    return [];
  }
};

export const GET_PROJECTS = gql`
  query GetProjectImages {
    mediaItems(where: { categoryName: "projekt" }, first: 20) {
      nodes {
        id
        sourceUrl
        altText
      }
    }
  }
`;
export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const projectsData = await client.request<{
      mediaItems: { nodes: Project[] };
    }>(GET_PROJECTS);
    return projectsData.mediaItems.nodes;
  } catch (err) {
    console.error("❌ Projects Fetch Error", err);
    return [];
  }
};*/
