import { useState } from 'react';

// Import Icons
import { GrClose } from 'react-icons/gr';
import { RiSearchLine } from 'react-icons/ri';

// Import Component
import RenderIf from '../UtilsComponents/RenderIf';

// == Component =>
const SearchInput = () => {
  const [val, setVal] = useState('');

  const onChangeValue = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setVal(value);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[364px]  w-full h-10 bg-white flex justify-center items-center gap-4 px-4 rounded-full">
        <RiSearchLine size="1.5rem" color="#000" />
        <input
          className="h-10 focus:outline-none grow"
          type="text"
          placeholder="Artistes, titres ou podcasts"
          onChange={onChangeValue}
          value={val}
        />
        <RenderIf bool={val.length > 0}>
          <button className="ml-auto">
            <GrClose size="1.5rem" color="#000" onClick={() => setVal('')} />
          </button>
        </RenderIf>
      </div>
    </div>
  );
};

export default SearchInput;
