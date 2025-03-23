type Project = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: Image;
  demo?: string;
  technologies: TechnologyType[];
  sourceCode: string;
  createdAt: string;
  updatedAt: string;
};

type ProjectWithRelations = Project & {
  career: Career | null;
};
