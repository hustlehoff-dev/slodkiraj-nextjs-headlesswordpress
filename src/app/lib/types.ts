export type Section = {
  id: string;
  title: string;
  content: string;
};
export type SectionsResponse = {
  pages: {
    nodes: Section[];
  };
};

export type SliderImage = {
  id: string;
  sourceUrl: string;
  altText: string;
};
export type SliderImagesResponse = {
  sliderImages: {
    nodes: SliderImage[];
  };
};

export type Project = {
  id: string;
  sourceUrl: string;
  altText: string;
};
export type ProjectsResponse = {
  projects: {
    nodes: Project[];
  };
};
