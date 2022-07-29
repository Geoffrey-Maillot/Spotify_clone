import { useState } from 'react';

// Import Component
import RenderIf from '../UtilsComponents/RenderIf';

// Import Icons
import { RiSearchLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';

// Import == Component =>
const Search = () => {
  const [search, setSearch] = useState('');

  const searchOnChange = (e: React.ChangeEvent) => {
    const value: string = (e.target as HTMLInputElement).value;
    setSearch(value);
  };

  const resetSearch = () => {
    setSearch('');
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[364px]  w-full h-10 bg-white flex justify-center items-center gap-4 px-4 rounded-full  ">
        <RiSearchLine size="1.5rem" color="#000" />
        <input
          className="h-10 focus:outline-none grow"
          type="text"
          name="search"
          value={search}
          placeholder="Artistes, titres ou podcasts"
          autoComplete="false"
          onChange={(e) => searchOnChange(e)}
        />
        <RenderIf bool={search.length > 0}>
          <button className="ml-auto">
            <GrClose size="1.5rem" color="#000" onClick={resetSearch} />
          </button>
        </RenderIf>
      </div>
    </div>
  );
};

export default Search;
