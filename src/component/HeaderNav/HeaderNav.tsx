import { useState } from 'react';

// Import Router
import { Link, useLocation } from 'react-router-dom';

// Import Component
import H2 from '../H2/H2';
import RenderIf from '../UtilsComponents/RenderIf';

// Import React Icon
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { RiArrowDownSFill } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';

//Todo: Background transparent quand scoll est en haut puis change de couleur quand on scoll avec une opacité en fonction de la distance du haut de la fenêtre
//Todo: Disable les boutons de nav si il n'y a pas de nav (voir su spotify)
//Todo: Supprimer les sugestions de l'input search

const HeaderNav = () => {
  const [search, setSearch] = useState('');
  const path = useLocation().pathname;

  const searchOnChange = (e: React.ChangeEvent) => {
    const value: string = (e.target as HTMLInputElement).value;
    setSearch(() => value);
  };

  const resetSearch = () => {
    setSearch('');
  };

  return (
    <header className="flex items-center content-start bg-transparent px-8 py-4 gap-4">
      {/* //? Voir pour faire un composant des boutons si on les retrouves encore ailleurs*/}
      <div className="flex content-start items-start gap-4">
        <button className="w-8 h-8 bg-dark-400/70 flex justify-center items-center cursor-pointer  rounded-full">
          <span>
            <HiOutlineChevronLeft size="1.2rem" color="#fff" />
          </span>
        </button>
        <button className="w-8 h-8 bg-dark-400/70 flex justify-center items-center cursor-pointer rounded-full">
          <span>
            <HiOutlineChevronRight size="1.2rem" color="#fff" />
          </span>
        </button>
      </div>
      <RenderIf bool={path === '/search'}>
        <div className="max-w-[364px] w-full h-10 bg-white flex justify-start items-center gap-4 px-4 rounded-full ">
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
      </RenderIf>
      <div className="ml-auto flex items-center justify-center gap-7">
        <a
          className=" block bg-transparent border border-solid border-gray-500 rounded-full hover:scale-[1.04] hover:bg-dark-400 hover:border-white transition py-2 px-4"
          href="https://www.spotify.com/fr/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade"
        >
          <H2 label="S'abonner" color="white" size="sm" />
        </a>
        <button className="flex items-center justify-center gap-2 p-1 rounded-full bg-dark-400 hover:bg-dark-50">
          <div className="w-7 h-7 ">
            <img
              className="rounded-full object-cover"
              src="https://source.unsplash.com/random/28x28"
              alt="Profil"
            />
          </div>
          <H2 label="Geoffrey Maillot" size="sm" color="white" />
          <RiArrowDownSFill color="white" />
        </button>
      </div>
    </header>
  );
};

export default HeaderNav;
