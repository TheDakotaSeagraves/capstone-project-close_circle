const API_BASE_URL = "http://localhost:3001"

// Get all categories
export const getAllCategories = () => {
  return fetch(`${API_BASE_URL}/categories`)
    .then((res) => res.json())
}

// Get category by ID
export const getCategoryById = (categoryId) => {
  return fetch(`${API_BASE_URL}/categories/${categoryId}`)
    .then((res) => res.json())
}