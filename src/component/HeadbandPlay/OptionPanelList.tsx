interface ButtonProps {
  children: any;
  handlerFunction: () => void;
  border?: boolean;
}

const Button = ({ children, handlerFunction, border }: ButtonProps) => (
  <button
    onClick={handlerFunction}
    className={` hover:bg-white/10 rounded h-10 w-full p-3 text-left text-white font-circularBook text-sm ${
      border ? 'border-b border-[#ffffff1a]' : ''
    } `}
  >
    {children}
  </button>
);

// TODO: Quand les données viendront de l'api, conditionner l'affichage des boutons en fonction des pages Playlist / Podcast et si la playlist est dans la bibliotheque ou pas.

// == Component =>
const OptionPanelList = () => {
  const handlerOnClickTemporaire = () => {
    alert('CLick sur une option');
  };

  return (
    <ul className="bg-dark-250 rounded p-1">
      {/*//?  Playlist */}
      <li>
        <Button handlerFunction={handlerOnClickTemporaire}>
          Accéder à la radio lié à la playlist
        </Button>
      </li>
      {/*//? Si dans bibliotheque / Playlist*/}
      <li>
        <Button handlerFunction={handlerOnClickTemporaire}>
          Supprimer du profil
        </Button>
      </li>
      {/*//? Si pas dans la bibiotheque  / Playlist*/}
      <li>
        <Button border handlerFunction={handlerOnClickTemporaire}>
          Ajouter à la Bibliothèque
        </Button>
      </li>
        {/*//? Podcast */}
         <li>
        <Button border handlerFunction={handlerOnClickTemporaire}>
          S'abonner
        </Button>
      </li>
      {/*//? Playlist */}
      <li>
        <Button border handlerFunction={handlerOnClickTemporaire}>
         Copier le lien vers la playlist
        </Button>
      </li>
    </ul>
  );
};

export default OptionPanelList;
