import { getProduct } from "../api";

export const fetchProduct = async (postId) => {
  let post;
  let error;

  try {
    post = await getProduct(postId);
  } catch (postError) {
    error = postError;
  }

  if (error) {
    return {
      error,
      res: null,
    };
  }

  return {
    error: null,
    res: {
      ...post,
    },
  };
};
