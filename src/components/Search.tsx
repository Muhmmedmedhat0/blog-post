import React from 'react';

interface Props {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => () => void;
}
function Search({ handleSearch, searchTerm }: Props) {
  return (
    <div className="container mx-auto">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none inline-block w-full"
          type="search"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
