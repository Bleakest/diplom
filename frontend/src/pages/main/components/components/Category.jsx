import React from "react";

export function Category({
  handleCategoryClick,
  category,
}) {
  return (
    <button
      id={category.name}
      onClick={(e) => handleCategoryClick(e)}
      className="px-4 mr-2 py-2 rounded-lg bg-zinc-400 hover:bg-zinc-300 hover:cursor-pointer"
    >
      {category.name}
    </button>
  );
}

export default Category;
