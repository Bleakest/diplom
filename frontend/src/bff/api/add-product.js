import { generateDate } from "../utils/generate-date";

export const addProduct = ({ imageUrl, title, content }) =>
  fetch("http://localhost:3001/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      image_url: imageUrl,
      published_at: generateDate(),
      title,
      content,
    }),
  }).then((createdPost) => createdPost.json());