type Social = {
  id: string;
  name: string;
  url: string;
  type: SocialType;
  createdAt: string;
  updatedAt: string;
};

type SocialType =
  | "x"
  | "github"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "youtube";
