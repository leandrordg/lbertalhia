type Project = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: Image;
  demo?: string;
  sourceCode: string;
  createdAt: string;
  updatedAt: string;
};

type ProjectWithRelations = Project & {
  technologies: Technology[];
  career: Career | null;
};
