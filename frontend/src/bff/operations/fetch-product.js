import { getComments, getProduct, getUsers } from "../api";

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

  const comments = await getComments(postId);

  const users = await getUsers();

  const commentsWithAuthor = comments.map((comment) => {
    const user = users.find(({ id }) => id === comment.postId);

    return {
      ...comment,
      author: user?.login,
    };
  });

  return {
    error: null,
    res: {
      ...post,
      comments: commentsWithAuthor,
    },
  };
};
