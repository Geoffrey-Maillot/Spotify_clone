import { useLocation } from 'react-router-dom';

// Import Prime React
import { Dialog } from 'primereact/dialog';
import Search from '../SearchInput/SearchInput';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

interface Props {
  isOpen: boolean;
  onHide: () => void;
}

// == Component =>
const SearchDialog = ({ isOpen, onHide, ...props }: Props) => {
  const windowWidth = useGetWindowWidth();
  const path = useLocation().pathname;

  if (path !== '/search') {
    return null;
  }

  if (windowWidth > 640 && isOpen) {
    onHide();
    return null;
  }

  return (
    <Dialog
      className="top-20 w-full text-center pr-4"
      onHide={onHide}
      visible={isOpen}
      position="top"
      modal={true}
      closeOnEscape
      closable
      header
    >
      <Search />
    </Dialog>
  );
};

export default SearchDialog;
