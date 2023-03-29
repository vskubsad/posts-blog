export const environment = {
  production: false,
  backendApiUrl: 'http://localhost:3000',
};

export const postsUrl = {
  getPosts: environment.backendApiUrl + '/api/posts',
  createPost: environment.backendApiUrl + '/api/posts',
};

export const loginUrl = {
  googleLogin: environment.backendApiUrl + '/auth/google',
  facebookLogin: environment.backendApiUrl + '/auth/facebook',
}
