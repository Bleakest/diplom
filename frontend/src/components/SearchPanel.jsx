import React from "react";

function SearchPanel({ search, onSearchHandler }) {
  return (
    <div className="flex justify-center items-center mt-4">
      <input
        onChange={(e) => onSearchHandler(e)}
        value={search}
        type="text"
        placeholder="Найти товар"
        className="border-2 border-zinc-600 rounded-lg w-[250px] h-10 text-center"
      />
    </div>
  );
}

export default SearchPanel;
