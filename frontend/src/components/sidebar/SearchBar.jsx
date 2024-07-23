import React from "react";

export default function SearchBar() {
  return (
    <form action="" className="flex w-auto items-center">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-64 max-w-xl"
        id="name"
        autoComplete="off"
      />
    </form>
  );
}
