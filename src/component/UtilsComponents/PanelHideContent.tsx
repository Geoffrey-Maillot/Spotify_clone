import { useState } from 'react';

// Import Component
import H2 from '../Typo/H2/H2';


interface Props {
  children: any;
}

const PanelHideContent = ({ children }: Props) => {
  const [contentIsOpen, toggleContentisOpen] = useState(false);

  const showContent = () => {
    toggleContentisOpen(true);
  };

  const hideContent = () => {
    toggleContentisOpen(false);
  };


  return (
    <div>
      <div className={`overflow-hidden ${contentIsOpen ? 'h-auto' : 'h-24'}`}>
          {children}
      </div>
      {contentIsOpen ? (
        <span className="block mt-2">
          <button onClick={hideContent}>
            <H2 size="lg" color="white" label="masquer" />
          </button>
        </span>
      ) : (
        <button onClick={showContent}>
          <H2 size="lg" color="white" label="... Afficher plus" />
        </button>
      )}
    </div>
  );
};

export default PanelHideContent;
