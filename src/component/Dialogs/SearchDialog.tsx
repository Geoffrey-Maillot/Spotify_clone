import { memo } from 'react';

// Import Prime React
import { Dialog } from 'primereact/dialog';
import Search from '../Search/Search';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

interface Props {
  visible: boolean;
  onHide: () => void;
}
// == Component =>
const SearchDialog = memo(({ visible = false, onHide }: Props) => {
  const windowWidth = useGetWindowWidth();

  if (windowWidth > 640) {
    return null;
  }

  return (
    <Dialog
      className="top-20 w-full text-center pr-4"
      onHide={onHide}
      visible={visible}
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
