import React from "react";

function SearchPanel() {
  return (
    <div className="flex justify-center items-center mt-2">
      <input type="text" placeholder="Введите текст" className="border-2 border-zinc-600 rounded-lg w-[250px] h-10 text-center" />
    </div>
  );
}

export default SearchPanel;
