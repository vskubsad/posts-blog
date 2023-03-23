export const environment = {
  production: false,
  backendApiUrl: 'http://localhost:4000',
};

export const postsUrl = {
  getPosts: environment.backendApiUrl + '/api/posts',
  createPost: environment.backendApiUrl + '/api/posts',
};
