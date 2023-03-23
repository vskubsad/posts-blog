export interface Post {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  date?: string;
}

export interface Posts {
  posts: Post[];
}
