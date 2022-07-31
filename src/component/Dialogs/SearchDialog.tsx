import { useLocation } from 'react-router-dom';

// State
import { observer } from 'mobx-react-lite';
import popup from '../../mobx/popup';

// Import Prime React
import { Dialog } from 'primereact/dialog';
import Search from '../Search/Search';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

// == Component =>
const SearchDialog = observer(() => {
  const windowWidth = useGetWindowWidth();
  const path = useLocation().pathname;

  if (path !== '/search') {
    return null;
  }

  if (windowWidth > 640 && popup.searchInputIsOpen) {
    popup.toggleSearchInput();
    return null;
  }

  return (
    <Dialog
      className="top-20 w-full text-center pr-4"
      onHide={popup.toggleSearchInput}
      visible={popup.searchInputIsOpen}
      position="top"
      modal={false}
      closeOnEscape
      closable
      header
    >
      <Search />
    </Dialog>
  );
});

export default SearchDialog;
