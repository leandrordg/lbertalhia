type Post = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
};

type PostWithRelations = Post & {
  tags: Tag[];
};
