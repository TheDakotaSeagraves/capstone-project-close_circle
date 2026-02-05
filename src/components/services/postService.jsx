const API_BASE_URL = "http://localhost:8088";

// Get all posts
export const getAllPosts = () => {
  return fetch(`${API_BASE_URL}/posts`).then((res) => res.json());
};

// Get post by ID
export const getPostById = (postId) => {
  return fetch(`${API_BASE_URL}/posts/${postId}`).then((res) => res.json());
};

// Get posts by user
export const getPostsByUserId = (userId) => {
  return fetch(`${API_BASE_URL}/posts?userId=${userId}`).then((res) =>
    res.json(),
  );
};

// Create a new post
export const createPost = (post) => {
  return fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  }).then((res) => res.json());
};

// Update a post
export const updatePost = (postId, post) => {
  return fetch(`${API_BASE_URL}/posts/${postId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  }).then((res) => res.json());
};

// Delete a post
export const deletePost = (postId) => {
  return fetch(`${API_BASE_URL}/posts/${postId}`, {
    method: "DELETE",
  });
};
